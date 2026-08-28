import { Types } from "mongoose";
import UserModel from "../model/user.model.js";
import { UserSchemaType } from "../types/userSchema.Types.js";

export const userRepository = {
  addUser,
  updateSeedUrl,
  findByEmail,
};

// ############################ add data to user collection #########################

async function addUser(userInfo: UserSchemaType) {
  return await UserModel.create(userInfo);
}

// ######################## get data from user collection #########################

async function findByEmail(email: string) {
  return await UserModel.findOne({ email: email });
}

// ########################## update data from user collection #########################

async function updateSeedUrl(userId: string | Types.ObjectId, seedUrlId: string | Types.ObjectId) {
  return await UserModel.findByIdAndUpdate(
    userId,
    { $push: { seedUrls: seedUrlId } },
    { new: true },
  );
}
