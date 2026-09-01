import { RateLimitMiddleware } from "@/infrastructure/middleware/rate-limiter/rateLimit.middlware.js";
import { slidingWindowRateLimit } from "@/app/server.js";
import { authRateLimitKey } from "@/shared/security/rate-limiter/keys/auth.key.js";
import { authRateLimitPolicies } from "@/shared/security/rate-limiter/policy/auth.policy.js";
import { RateLimitAlgorithm } from "@repo/rate-limiter/types/RateLimiteReturnType";
import { SlidingWindowPolicyType } from "@repo/rate-limiter/types/silidingWindowPolicy";
import { Request, Response, NextFunction } from "express";

/*
*   LoginRateLimit : using both IP and Email as key to limit the login attempts
*/
export function loginRateLimit(
    req: Request,
    res: Response,
    next: NextFunction,
) {

    const midd = RateLimitMiddleware(
        slidingWindowRateLimit,
        [
            {
                key: authRateLimitKey.loginByIp,
                policy: authRateLimitPolicies.loginIp
            },
            {
                key: authRateLimitKey.loginByEmail,
                policy: authRateLimitPolicies.loginEmail
            }
        ]
    )

    return midd(req, res, next);
}


export function registerRateLimit(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const midd = RateLimitMiddleware(
        slidingWindowRateLimit,
        [
            {
                key: authRateLimitKey.registerByIp,
                policy: authRateLimitPolicies.register
            },
            {
                key: authRateLimitKey.registerByEmail,
                policy: authRateLimitPolicies.register
            }
        ]
    )
    return midd(req, res, next);
}



export function verifyOtpRateLimit(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const midd = RateLimitMiddleware(
        slidingWindowRateLimit,
        [
            {
                key: authRateLimitKey.verifyOtpByIp,
                policy: authRateLimitPolicies.verifyOtp
            },
            {
                key: authRateLimitKey.verifyOtpByEmail,
                policy: authRateLimitPolicies.verifyOtp
            }
        ]
    )
    return midd(req, res, next);
}
