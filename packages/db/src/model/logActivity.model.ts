import { model } from "mongoose";
import LogActivitySchema from "../schema/logActivity/logActivity.schema.js";

const LogActivityModel = model("LogActivity", LogActivitySchema);

export default LogActivityModel;