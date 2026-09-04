

import { env } from "@/app/app.js";
import { googleAuthService } from "@/app/server.js";
import { AppError } from "@/shared/error/appError.js";
import { Request, Response } from "express"
import { getRequestMetadata } from "@/lib/getRequestMetaData.js";
import cookieService from "@/shared/auth/cookies/cookie.service.js";




export async function googleCallbackController(req: Request, res: Response) {
    const { code, state } = req.query;

    if (!code || typeof code != "string") {
        throw new AppError("Missing authorization code", 400);
    }

    if (!state || typeof state != "string") {
        throw new AppError("Missing authorization state", 400)
    }

    const callbackUrl = new URL(req.originalUrl,
        `${req.protocol}://${req.get("host")}`
    )

    const requestMeta = await getRequestMetadata(req);

    const response = await googleAuthService.addUser(state, code, callbackUrl, requestMeta);


    // create the cookie
    cookieService.setCookie(res, response.sessionId);

    const url = googleAuthService.getRedirectUrl();
    res.status(200).redirect(url.href);

}
