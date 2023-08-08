import { NextFunction, Request, RequestHandler, Response } from "express";
import { AuthenticateCallback } from "passport";
import { PassportAuth } from "../config/auth/passport";
import { IUser, IUserMethods } from "../models/user";
import generateJWT from "../utils/generate-jwt";

const generateJWTCallback =
  (req: Request, res: Response, next: NextFunction): AuthenticateCallback =>
  (err, user: IUser & IUserMethods, info, status) => {
    if (err || !user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const jwt = generateJWT(user);
    user.removePassword()

    return res.status(200).json({ user, token: jwt });
  };

export const authLocalMiddleware: RequestHandler = (req, res, next) => {
  PassportAuth.authenticate(
    "local",
    {
      session: false,
    },
    generateJWTCallback(req, res, next)
  )(req, res, next);
};

export const authJWTMiddleware: RequestHandler = (req, res, next) => {
  PassportAuth.authenticate(
    "jwt",
    {
      session: false,
    },
    (err, user: IUser, info, status) => {
      if (err || !user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      next();
    }
  )(req, res, next);
};

export const authGoogleMiddleware: RequestHandler = (req, res, next) => {
  PassportAuth.authenticate(
    "google",
    {
      session: false,
    },
    generateJWTCallback(req, res, next)
  )(req, res, next);
};
