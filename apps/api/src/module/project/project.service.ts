import { AuthenticatedUserType } from "@/shared/types/authenticatedUserInfo.js";
import { CreateProjectRequestType, DeleteProjectRequestType } from "@repo/contracts/apiContracts/project/project.request";
import { projectRepository } from "@repo/db/repository/projectRepository";
import { projectSettingRepository } from "@repo/db/repository/projectSettingRepository";
import mongoose from "mongoose";
import { DEFAULT_PROJECT_SETTING } from "./default-project-setting.js";
import { AppError } from "@/shared/error/appError.js";



export const projectService = {
    createProject,
    deleteProject

}



/*
*   1. Get the authenticated user
*   2. Create the project using name and url
*   3. Add the default settings
*/


async function createProject(projectData: CreateProjectRequestType, user: AuthenticatedUserType) {

    const mongoSession = await mongoose.startSession();

    try {

        const newProject = await mongoSession.withTransaction(async () => {
            const createProject = await projectRepository.createProject({
                userId: new mongoose.Types.ObjectId(user.userId),
                projectName: projectData.projectName,
                domain: projectData.domain,
                createdAt: new Date()
            })

            await projectSettingRepository.create({
                projectId: createProject._id,
                ...DEFAULT_PROJECT_SETTING
            })
            return createProject;

        })


        return {
            message: "Project created successfully",
            projectId: newProject._id.toString()
        }
    } finally {
        await mongoSession.endSession();
    }


}



async function deleteProject(deleteData: DeleteProjectRequestType) {

    const mongoSession = await mongoose.startSession();

    try {

        await mongoSession.withTransaction(async () => {
            await projectSettingRepository.delete(deleteData.projectId);
            await projectRepository.deleteProject(deleteData.projectId);
        })

        return {
            message: "Project deleted successfully"
        }


    } finally {
        await mongoSession.endSession();
    }
}