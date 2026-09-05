import { Request, Response, NextFunction } from "express";

import { crawlProjectRequestSchema } from "@repo/contracts/apiContracts/project/crawl.request";
import { AppError } from "@/shared/error/appError.js";


export async function CrawlProjectController(req: Request, res: Response, next: NextFunction) {
    const user = req.user;

    if (!user) {
        throw new AppError("Invalid request, user not logged in", 401);
    }

    const { success, data, error } = crawlProjectRequestSchema.safeParse(req.params);


    if (!success) {
        return next(error);
    }
    res.status(200).json({ message: "Crawl project endpoint", crawlProjectId: data.projectId });
}