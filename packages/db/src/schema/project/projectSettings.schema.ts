import mongoose from "mongoose";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import { ProjectSettingSchemaType } from "../../types/projectType/projectSetting.Types.js";


const DEFAULT_ROBOTS_TXT_URLS = ["/robots.txt"] as const;
const DEFAULT_SITEMAP_URLS = ["/sitemap.xml"] as const;
const DEFAULT_USER_AGENT = "CrawllyticsBot/1.0";

const projectSettingsSchemaDefinition: SchemaOf<ProjectSettingSchemaType> = {
    projectId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Project" },
    /*
    * robotTxtUrls : The URLs of the robots.txt files for the project and user can add more urls
    */
    robotsTxtUrls: { type: [String], default: [...DEFAULT_ROBOTS_TXT_URLS] },
    /*
    * siteMapUrls : The URLs of the sitemap.xml files for the project and user can add more urls
    */
    siteMapUrls: { type: [String], default: [...DEFAULT_SITEMAP_URLS] },
    /*
    * userAgent : The user agent for the project and user can change it
    * If userAgent is not provided then default user agent will be used
    */
    userAgent: { type: String, default: DEFAULT_USER_AGENT },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
}


const ProjectSettingsSchema = new mongoose.Schema<ProjectSettingSchemaType>(projectSettingsSchemaDefinition);

export default ProjectSettingsSchema;
