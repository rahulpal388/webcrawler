import { Request, NextFunction, Response } from "express";
import { createProjectSchema } from "@repo/contracts/apiContracts/project/project.request";
import { projectService } from "@/module/project/project.service.js";
import { AppError } from "@/shared/error/appError.js";


export async function CreateProject(req: Request, res: Response, next: NextFunction) {
    const user = req.user;

    if (!user) {
        throw new AppError("Invalid request, user not logged in", 401);
    }

    const { success, data, error } = createProjectSchema.safeParse(req.body);

    if (!success) {
        return next(error);
    }
    const response = await projectService.createProject(data, user);

    res.status(201).json(response);

}