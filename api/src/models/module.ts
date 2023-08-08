import mongoose, { model, Model, Schema } from "mongoose";
import { ClassDocument } from "./class";

/**
 * Interface to modelate the Class Schema
 */
export interface IModule {
  name: string;
  subtitle: string;
  isCompleted: boolean;
  classes: ClassDocument[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * The return type of the User model
 */
type ModuleModel = Model<IModule>;

export const moduleSchema = new Schema<IModule, ModuleModel>(
  {
    name: { type: String, unique: true, required: true },
    subtitle: {type: String},
    isCompleted: { type: Boolean },
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
  },
  {
    timestamps: true,
  }
);

export type ModuleDocument = typeof moduleSchema;

export const Module = model<IModule, ModuleModel>("Module", moduleSchema);
