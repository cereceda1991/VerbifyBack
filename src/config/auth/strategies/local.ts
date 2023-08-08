import { Strategy as PassportLocalStrategy } from "passport-local";
import { User } from "../../../models/user";

/**
 * To authenticate users using a username and password
 */
export const LocalStrategy = new PassportLocalStrategy({
  usernameField: "email",
}, async (email, candidatePassword, done) => {
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return done(null, false, { message: "No existe usuario con ese email" });
    }

    const isValidPassword = await existingUser.validatePassword(candidatePassword);

    if (!isValidPassword) {
      return done(null, false, { message: "Contraseña incorrecta" });
    }

    // If the user exists and the password is correct, return the user
    return done(null, existingUser);
  } catch (error) {
    done(error);
  }
})
