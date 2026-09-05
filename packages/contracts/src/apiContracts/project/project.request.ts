import z from "zod"


export const createProjectSchema = z.object({
    projectName: z
        .string()
        .trim()
        .min(1, { message: "Project name is required" })
        .max(100, { message: "Project name should not exceed 100 characters" }),

    domain: z
        .url({ message: "Invalid URL format" })
        .trim()
        .max(2048, { message: "URL should not exceed 2048 characters" })
});



export const deleteProjectSchema = z.object({
    projectId: z.string().trim().min(1, { message: "Project ID is required" }).max(100, { message: "Project ID should not exceed 100 characters" })
});


export type CreateProjectRequestType = z.infer<typeof createProjectSchema>;
export type DeleteProjectRequestType = z.infer<typeof deleteProjectSchema>;