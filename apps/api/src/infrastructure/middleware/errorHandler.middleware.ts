import { Request, Response, NextFunction } from "express";
import { logger } from "@repo/lib/logger";
import { AppError } from "@/shared/error/appError.js";
import { ZodError } from "zod";

export function errorHandlerMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
        return next(err);
    }
    if (err instanceof ZodError) {
        logger.warn({
            requestId: req.requestId,
            message: "Validation Error",
            path: req.path,
            metaData: {
                issues: err.issues,
            },
        })
        return res.status(400).json({
            message: "Validation Error",
            issues: err.issues,
        });
    }
    if (err instanceof AppError) {
        logger.warn({
            requestId: req.requestId,
            message: err.message,
            path: req.path,
            metaData: {
                statusCode: err.statusCode,
                options: err.details,
            },
        });

        return res.status(err.statusCode).json({
            message: err.message,
        });
    }

    logger.error({
        requestId: req.requestId,
        message: err.message ?? "Internal Server Error",
        path: req.path,
        metaData: {
            statusCode: 500,
        },
    });

    res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
    });
}


