import mongoose from "mongoose";



export enum ProjectMemberRoleType {
    OWNER = "owner",
    MEMBER = "member"
}

export type ProjectMemberSchemaType = {
    projectId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    role: ProjectMemberRoleType;
    createdAt: Date;
}
