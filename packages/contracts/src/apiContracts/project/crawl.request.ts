import { z } from "zod";



export const crawlProjectRequestSchema = z.object({
    projectId: z.string().trim().min(1, { message: "Project ID is required" }).max(100, { message: "Project ID should not exceed 100 characters" })
});