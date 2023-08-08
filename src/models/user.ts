import { type Model, Schema, model, Types } from "mongoose";
import bcrypt from "bcrypt";

/**
 * Interface to model the User Schema
 */
export interface IUser {
  _id: Types.ObjectId;
  email: string;
  passwordHash: string;
  bio?: string;
  phone?: string;
  country?: string;
  firstName?: string;
  lastName?: string;
  isSuscribed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Interface to model the methods of the User Schema
 */
export interface IUserMethods {
  validatePassword: (candidatePassword: string) => Promise<boolean>;
  removePassword: () => void;
}

/**
 * The return type of the User model
 */
export type UserModel = Model<IUser, {}, IUserMethods>;

export const userSchema = new Schema<IUser, UserModel, IUserMethods>(
  {
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String },
    bio: { type: String },
    phone: { type: String },
    country: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    isSuscribed: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);


export type UserDocument = typeof userSchema;

// Hash user password before saving to database
userSchema.pre("save", async function (next) {
  if (!this.isModified("passwordHash")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.passwordHash = await bcrypt.hash(this.passwordHash!, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// To compare incoming password with the hashed password in the database
userSchema.method(
  "validatePassword",
  async function (candidatePassword: string) {
    return bcrypt.compare(candidatePassword, this.passwordHash);
  }
);

// To remove the passwordHash from the user object before sending it to the client
userSchema.method("removePassword", function () {
  this.passwordHash = undefined;
});

export const User = model<IUser, UserModel>("User", userSchema);
