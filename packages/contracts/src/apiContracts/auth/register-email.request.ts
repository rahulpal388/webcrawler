

import z from "zod";




export const registerEmailRequestSchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().min(8).max(20),
});

export const verifyRegistrationOTPRequestSchema = z.object({
    verificationId: z.string(),
    otp: z.string().length(6),
});


export type RegisterEmailRequestType = z.infer<typeof registerEmailRequestSchema>;

export type VerifyRegistrationOTPRequestType = z.infer<typeof verifyRegistrationOTPRequestSchema>;