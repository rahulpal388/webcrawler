import { EmailStreamMessageType } from "@repo/redis/types/emailStreamMessageType";
import { render } from "@react-email/render";
import { createElement } from "react";
import { LoginAlertEmailProps, LoginAlertTemplate } from "./loginAlert.js";
import LoginAlertEmail from "./loginAlertEmail.js";
import Mail from "@/utils/mail.js";




export async function sendLoginAlertMail(msg: EmailStreamMessageType<"login_alert">) {
    const emailPayload = {
        name: msg.payload.name,
        deviceName: msg.payload.deviceName,
        location: msg.payload.location,
        ipAddress: msg.payload.ipAddress,
    }

    const html = await render(createElement(LoginAlertEmail, emailPayload));

    return Mail.send({
        from: LoginAlertTemplate.from,
        to: msg.payload.email,
        subject: LoginAlertTemplate.subject,
        html: html,
    });
}