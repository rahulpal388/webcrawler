import { SlidingWindowPolicyType } from "@repo/rate-limiter/types/silidingWindowPolicy";


export const authRateLimitPolicies = {
    loginIp: {
        limit: 5,
        windowMs: 15 * 60 * 1000,
    },

    loginEmail: {
        limit: 5,
        windowMs: 15 * 60 * 1000,
    },

    register: {
        limit: 5,
        windowMs: 15 * 60 * 1000,
    },
    verifyOtp: {
        limit: 5,
        windowMs: 15 * 60 * 1000,
    }
} satisfies Record<string, SlidingWindowPolicyType>