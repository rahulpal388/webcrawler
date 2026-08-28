import { ProjectSchemaType } from "../../types/projectType/project.Types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";
import UserAgentSchema from "./userAgentSchema.js";




const projectSchemaDefination: SchemaOf<ProjectSchemaType> = {
    projectName: { type: String, required: true },
    url: { type: String, required: true },
    robotsTxt: [{ type: UserAgentSchema, default: [{ userAgent: [], allow: [], disallow: [] }] }],
    siteMapUrls: [{ type: String, default: [] }],
}


const ProjectSchema = new mongoose.Schema<ProjectSchemaType>(projectSchemaDefination);

export default ProjectSchema;