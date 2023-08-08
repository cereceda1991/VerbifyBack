import { Request, Response } from "express";
import { create as createUser } from "../services/users.service";
import { IUser } from "../models/user";
import generateJWT from "../utils/generate-jwt";

export const signUp = async (req: Request, res: Response) => {
  try {
    const bodyUser: IUser = {
      ...req.body,
    };

    const newUser = await createUser(bodyUser);
    newUser.removePassword()

    const jwt = generateJWT(newUser);

    res.status(201).json({ user: newUser, token: jwt });
  } catch (error) {
    res.status(400).json({
      errors: [
        {
          code: error.code,
          message: error.message,
        },
      ],
    });
  }
};
