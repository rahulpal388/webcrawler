import ProjectModel from "../model/project/project.model.js";
import { ProjectSchemaType } from "../types/projectType/project.Types.js";




export const projectRepository = {

    async createProject(projectData: ProjectSchemaType) {
        return ProjectModel.create(projectData);
    },


    async deleteProject(projectId: string) {
        return ProjectModel.findByIdAndDelete({ _id: projectId });
    }



}