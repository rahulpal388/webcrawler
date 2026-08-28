import ProjectMemberSchema from "../schema/projectMemeber/projectMember.schema.js";
import mongoose from "mongoose";
import { ProjectMemberSchemaType } from "../types/projectMember.Type.js";



const ProjectMemeberModel = mongoose.model<ProjectMemberSchemaType>("ProjectMember", ProjectMemberSchema);


export default ProjectMemeberModel;