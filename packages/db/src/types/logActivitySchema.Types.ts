import mongoose from "mongoose";

export type LocationType = {
    country: string;
    region: string | null;
    city: string | null;
}

export type LoginActivitySchemaType = {
    userId: mongoose.Types.ObjectId;
    sessionId: string;
    userAgent: string;
    ipAddress: string;
    location: LocationType;
    createdAt: Date;
    lastActiveAt: Date;
    expiredAt: Date;
}