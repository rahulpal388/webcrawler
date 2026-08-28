import { ProjectMemberRoleType, ProjectMemberSchemaType } from "../../types/projectMember.Type.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";



const projectMemberSchemaDefination: SchemaOf<ProjectMemberSchemaType> = {
    projectId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Project" },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    role: { type: String, enum: Object.values(ProjectMemberRoleType), required: true },
    createdAt: { type: Date, default: Date.now },
}


const ProjectMemberSchema = new mongoose.Schema<ProjectMemberSchemaType>(projectMemberSchemaDefination);

export default ProjectMemberSchema;