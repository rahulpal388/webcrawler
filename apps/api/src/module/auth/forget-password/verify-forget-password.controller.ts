import { Request, Response, NextFunction } from "express";
import { verifyForgetPasswordRequestSchema } from "@repo/contracts/apiContracts/auth/forget-password.request";
import forgetPasswordService from "@/module/auth/forget-password/forget-password.services.js";


export async function verifyForgetPasswordController(req: Request, res: Response, next: NextFunction) {
    console.log("data1", "Parsing request body...")

    const { success, data, error } = verifyForgetPasswordRequestSchema.safeParse(req.body);
    if (!success) {
        return next(error);
    }

    console.log("data", data)
    const response = await forgetPasswordService.verifyResetPasswordToken(data);

    res.status(200).json(response);


}