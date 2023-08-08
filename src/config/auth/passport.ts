import Passport from "passport";
import { GoogleStrategy, JWTStrategy, LocalStrategy } from "./strategies";
import { User, UserDocument } from "../../models/user";

// User serialization
Passport.serializeUser((user, done) => {
  done(null, user);
});

Passport.deserializeUser((id, done) => {
  User.findById(id, (err: NativeError, user: UserDocument) => {
    done(err, user);
  });
});

Passport.use(LocalStrategy);
Passport.use(JWTStrategy);
Passport.use(GoogleStrategy);
// ...more strategies

export { Passport as PassportAuth };
