import mongoose from "mongoose";


export type ProjectSettingSchemaType = {
    projectId: mongoose.Types.ObjectId;
    robotsTxtUrls: string[];
    siteMapUrls: string[];
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}
