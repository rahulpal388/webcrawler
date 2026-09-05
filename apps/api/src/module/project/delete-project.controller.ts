
import { AppError } from "@/shared/error/appError.js";
import { Request, NextFunction, Response } from "express";
import { deleteProjectSchema } from "@repo/contracts/apiContracts/project/project.request";
import { projectService } from "@/module/project/project.service.js";



export async function DeleteProject(req: Request, res: Response, next: NextFunction) {

    const user = req.user;

    if (!user) {
        throw new AppError("Invalid request, user not logged in", 401);
    }

    const { success, data, error } = deleteProjectSchema.safeParse(req.body);

    if (!success) {
        return next(error);
    }

    // delete the project
    const response = await projectService.deleteProject(data);

    res.status(200).json(response);

}