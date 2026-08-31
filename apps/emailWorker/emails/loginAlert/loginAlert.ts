
import { APP_NAME, AUTH_EMAIL } from "@/config/config.js";
import { EmailTemplate } from "@/types/emailTemplateTypes.js";
import { ZodNull } from "zod";


export interface LoginAlertEmailProps {
    name: string;
    deviceName: string | null;
    location: string | null;
    ipAddress: string | null;
};




export const LoginAlertTemplate: EmailTemplate = {
    from: `${APP_NAME} <${AUTH_EMAIL}>`,
    subject: "Crawllytics login alert",
};