import cookieService from "@/shared/auth/cookies/cookie.service.js";
import { NextFunction, Request, Response } from "express";
import { sessionService } from "@/app/server.js";

export async function authenticateMiddleware(req: Request, res: Response, next: NextFunction) {

    const sessionId = cookieService.getSessionId(req);

    if (!sessionId) {
        req.user = null;
        return next();
    }


    const sessionUser = await sessionService.get(sessionId);

    if (!sessionUser) {
        cookieService.clearCookie(res);
        req.user = null;
        return next();
    }

    req.user = { ...sessionUser, sessionId };
    next();

}