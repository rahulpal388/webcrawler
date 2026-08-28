
import mongoose from "mongoose";


export enum AuthProvidersType {
    EMAIL = "email",
    GOOGLE = "google"
}

export type AuthIdentitySchemaType = {
    userId: mongoose.Types.ObjectId;
    provider: AuthProvidersType;
    providerAccountId: string;
    passwordHash: string | null;
    createdAt: Date;
    updatedAt: Date;
}