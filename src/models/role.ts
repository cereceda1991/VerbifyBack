import { type Model, Schema, model } from "mongoose";

/**
 * Interface to model the Role Schema
 */
export interface IRole {
  name: string;
  createdAt: Date;
}

export const roleSchema = new Schema<IRole>({
  name: { type: String, unique: true, required: true },
  createdAt: Date,
});

export type RoleDocument = typeof roleSchema;

type RoleModel = Model<IRole>;

export const Role = model<IRole, RoleModel>("Role", roleSchema);
