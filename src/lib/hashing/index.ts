import { HASHING_SALT } from "./constants";
// import bcrypt from "bcryptjs";

// export const hashItem = async (item: string) => {
//   return await bcrypt.hash(item, HASHING_SALT);
// };

const crypto = require("crypto");

export const hashItem = (item: string) => {
  return crypto.createHash("sha256").update(item).digest("hex");
};
