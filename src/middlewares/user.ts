import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

export const isAuthenticated = (req: Request, _: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }

  next(new createHttpError.Unauthorized("Necesitas iniciar sesión para acceder a este recurso"))
};
