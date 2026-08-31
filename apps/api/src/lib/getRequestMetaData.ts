import geoIpService from "@/lib/getLocation.js";
import { LocationType } from "@repo/db/types/logActivitySchema.Types";

import { Request } from "express";

export type RequestMetadata = {
    userAgent: string | null;
    ipAddress: string | null;
    location: LocationType;
};


export async function getRequestMetadata(
    req: Request
): Promise<RequestMetadata> {

    const userAgent = req.get("user-agent") ?? null;

    const ipAddress = req.ip ?? null;

    if (!ipAddress) {
        return {
            userAgent,
            ipAddress,
            location: null,
        };
    }



    const location = await geoIpService.lookup(ipAddress);

    return {
        userAgent,
        ipAddress,
        location,
    };
}
