
import { env } from "@/app/app.js";
import { SESSION_EXPIRATION_TIME } from "@/shared/auth/session/session.service.js";
import { Request, Response } from "express";


const SESSION_COOKIE_NAME = "sessionId";

class CookieService {
    setCookie(res: Response, sessionId: string) {
        res.cookie(SESSION_COOKIE_NAME, sessionId, {
            httpOnly: true,
            secure: env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: SESSION_EXPIRATION_TIME * 1000,
            path: "/"
        })

    }

    getSessionId(req: Request): string | undefined {
        const sessionId = req.cookies[SESSION_COOKIE_NAME];
        console.log("Session ID from cookie:", sessionId);
        return sessionId;
    }

    clearCookie(res: Response) {
        res.clearCookie(SESSION_COOKIE_NAME, {
            httpOnly: true,
            secure: env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/"
        })
    }
}



const cookieService = new CookieService();

export default cookieService;