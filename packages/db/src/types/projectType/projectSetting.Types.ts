import mongoose from "mongoose";
import { ReportFormatType } from "../report.Types.js";




export type ProjectSettingSchemaType = {
    projectId: mongoose.Types.ObjectId;
    sendReport: boolean;
    reportType: ReportFormatType;
    robotsTxtUrls: string;
    siteMapUrls: string[];
    userAgent: string;
}
