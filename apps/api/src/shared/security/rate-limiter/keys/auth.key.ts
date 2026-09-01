
import { createRateLimiterKey } from "./createRateLimiter.key.js";
import { Request } from "express";

const AUTH_RESOURCE = "auth";

export const authRateLimitKey = {
    loginByIp: (req: Request) => {
        if (!req.ip) {
            throw new Error("Client IP is unavailable");
        }
        return createRateLimiterKey({
            resource: AUTH_RESOURCE,
            action: "login",
            dimension: "ip",
            identifier: req.ip,
        });
    },
    loginByEmail: (req: Request) => {
        return createRateLimiterKey({
            resource: AUTH_RESOURCE,
            action: "login",
            dimension: "email",
            identifier: req.body.email,
        });
    },
    registerByIp: (req: Request) => {
        if (!req.ip) {
            throw new Error("Client IP is unavailable");
        }
        return createRateLimiterKey({
            resource: AUTH_RESOURCE,
            action: "register",
            dimension: "ip",
            identifier: req.ip,
        });
    },
    registerByEmail: (req: Request) => {
        return createRateLimiterKey({
            resource: AUTH_RESOURCE,
            action: "register",
            dimension: "email",
            identifier: req.body.email,
        });
    },

    verifyOtpByIp: (req: Request) => {
        if (!req.ip) {
            throw new Error("Client IP is unavailable");
        }
        return createRateLimiterKey({
            resource: AUTH_RESOURCE,
            action: "verify-otp",
            dimension: "ip",
            identifier: req.ip,
        });
    },
    verifyOtpByEmail: (req: Request) => {
        return createRateLimiterKey({
            resource: AUTH_RESOURCE,
            action: "verify-otp",
            dimension: "email",
            identifier: req.body.email,
        });
    }

}