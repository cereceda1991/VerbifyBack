import { Strategy as PassportGoogleStrategy } from "passport-google-oauth20";
import { User } from "../../../models/user";

export const GoogleStrategy = new PassportGoogleStrategy(
  {
    clientID: process.env.AUTH_GOOGLE_CLIENT_ID,
    clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.AUTH_GOOGLE_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await User.findOneAndUpdate(
        {
          email: profile.emails[0].value,
        },
        {
          $set: {
            displayName: profile.displayName ?? profile.name,
            email: profile.emails[0].value,
          },
        },
        { upsert: true }
      );

      return done(null, existingUser);
    } catch (error) {
      done(error);
    }
  }
);
