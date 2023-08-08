import jwt from "jsonwebtoken";
import { IUser } from "../models/user";
import { Types } from "mongoose";

export default function generateJWT(user: IUser) {
  return jwt.sign(
    {
      user: {
        _id: user._id,
        email: user.email,
      },
    },
    process.env.AUTH_JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
}
