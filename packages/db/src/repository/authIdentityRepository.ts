import authIdentityModel from "../model/authIdentity.model.js";
import { AuthIdentitySchemaType, AuthProvidersType } from "../types/authIdentitySchema.Types.js";




export const authIdentityRepository = {
    addAuthIdentity,
    findByUserId,
}




async function addAuthIdentity(authIdentityInfo: AuthIdentitySchemaType) {
    return authIdentityModel.create(authIdentityInfo);
}

async function findByUserId(userId: string, provider: AuthProvidersType) {
    return authIdentityModel.findOne({ userId: userId, provider: provider });
}