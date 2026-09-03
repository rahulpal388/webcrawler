

import z from "zod";
import { passwordSchema } from "./common/password.schema.js";


export const MIN_OTP_LENGTH = 6;


export const registerEmailRequestSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: passwordSchema
});

export const verifyRegistrationOTPRequestSchema = z.object({
    verificationId: z.string(),
    otp: z.string().length(MIN_OTP_LENGTH, `OTP must be ${MIN_OTP_LENGTH} characters long`),
});


export type RegisterEmailRequestType = z.infer<typeof registerEmailRequestSchema>;

export type VerifyRegistrationOTPRequestType = z.infer<typeof verifyRegistrationOTPRequestSchema>;