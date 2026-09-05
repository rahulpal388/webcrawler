import mongoose from "mongoose";



export type ProjectSchemaType = {
    userId: mongoose.Types.ObjectId;
    projectName: string;
    domain: string;
    createdAt: Date;
}
