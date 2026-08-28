import { Schema } from "mongoose";
import { SchemaOf } from "../../types/schemaOfTypes.js";
import { UserAgentType } from "../../../../contracts/src/robotTxt.contracts.js";

const userAgentSchemaDefinition: SchemaOf<UserAgentType> = {
  userAgent: [{ type: String, required: true }],
  allow: [{ type: String, required: true }],
  disallow: [{ type: String, required: true }],
};

const UserAgentSchema = new Schema<UserAgentType>(userAgentSchemaDefinition, {
  _id: false,
  versionKey: false,
  strict: false,
});


export default UserAgentSchema;
