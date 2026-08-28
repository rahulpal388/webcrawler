import { LoginActivitySchemaType } from "../../types/logActivitySchema.Types.js";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import mongoose from "mongoose";
import LocationSchema from "./location.schema.js";




const LogActivitySchemaDefinition: SchemaOf<LoginActivitySchemaType> = {
    userId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    sessionId: { type: String, required: true },
    userAgent: { type: String, required: true },
    ipAddress: { type: String, required: true },
    location: { type: LocationSchema, required: true },
    createdAt: { type: Date, default: Date.now },
    lastActiveAt: { type: Date, default: Date.now },
    expiredAt: { type: Date, required: true },

}


const LogActivitySchema = new mongoose.Schema<LoginActivitySchemaType>(LogActivitySchemaDefinition);

export default LogActivitySchema;