import z from "zod";



export const loginEmailRequestSchema = z.object({
    email: z.string(),
    password: z.string().min(8).max(20),
});


export type LoginEmailRequestType = z.infer<typeof loginEmailRequestSchema>;
