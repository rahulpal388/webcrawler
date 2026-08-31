import { model } from "mongoose";
import LoginActivitySchema from "../schema/logActivity/logActivity.schema.js";

const logActivityModel = model("LogActivity", LoginActivitySchema);

export default logActivityModel;
