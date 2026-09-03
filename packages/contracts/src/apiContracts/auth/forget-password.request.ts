
import { z } from "zod";
import { passwordSchema } from "./common/password.schema.js";

export const forgetPasswordRequestSchema = z.object({
    email: z.string()
});


export const verifyForgetPasswordRequestSchema = z.object({
    token: z.string(),
    newPassword: passwordSchema
})

export type verifyForgetPasswordRequestType = z.infer<typeof verifyForgetPasswordRequestSchema>;