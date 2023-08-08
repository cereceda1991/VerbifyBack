import { Strategy as PassportJWTStrategy, ExtractJwt, StrategyOptions as JWTStrategyOptions } from "passport-jwt"
import { User } from "../../../models/user";

const jwtStrategyOptions: JWTStrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.AUTH_JWT_SECRET,
}

export const JWTStrategy = new PassportJWTStrategy(jwtStrategyOptions, async (payload, done) => {
  try {
    const existingUser = await User.findById(payload.user._id);

    if (!existingUser) {
      return done(null, false, { message: "No existe usuario con ese email" });
    }

    // If the user exists and the password is correct, return the user
    return done(null, existingUser);
  } catch (error) {
    done(error);
  }
});