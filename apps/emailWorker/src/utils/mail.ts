import { CreateEmailOptions } from "resend";
import { resend } from "../index.js";

export function mail() {
  return {
    send,
  };

  async function send(options: CreateEmailOptions) {
    return resend.emails.send(options);
  }
}

const Mail = mail();
export default Mail;

