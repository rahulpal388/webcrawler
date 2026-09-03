
import { NextFunction, Request, Response } from "express";
import { forgetPasswordRequestSchema } from "@repo/contracts/apiContracts/auth/forget-password.request";
import forgetPasswordService from "@/module/auth/forget-password/forget-password.services.js";




export async function forgetPasswordController(req: Request, res: Response, next: NextFunction) {
    const { success, data, error } = forgetPasswordRequestSchema.safeParse(req.body);
    if (!success) {
        return next(error);
    }

    const response = await forgetPasswordService.sendResetPasswordEmail(data.email);

    res.status(200).json(response);

}