import { EmailTemplate } from "@/types/emailTemplateTypes.js";
import { APP_NAME, AUTH_EMAIL } from "@/config/config.js";


export interface PasswordResetEmailProps {
    username: string;
    otp: string;
    expireIn: number;
    appName: string;
}


export const PasswordResetTemplate: EmailTemplate = {
    from: `${APP_NAME} <${AUTH_EMAIL}>`,
    subject: "Crawllytics password reset",
};