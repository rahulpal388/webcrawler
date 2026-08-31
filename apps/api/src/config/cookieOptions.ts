import { env } from "@/app/app.js";
import { CookieOptions } from "express";

export const cookieOptions: CookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "lax",
  path: "/",
  maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  domain: env.NODE_ENV === "production" ? env.COOKIE_DOMAIN : undefined,
};


