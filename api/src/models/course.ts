import mongoose, { model, Model, Schema } from "mongoose";
import { Module, ModuleDocument } from "./module";
/**
 * Interface to modelate the Course Schema
 */
export interface ICourse {
   name: string;
   description: string;
   imageURL: string;
   level: string;
   isPublic: boolean;
   tags: string;
   Module: ModuleDocument[];
   isCompleted: boolean;
   createdAt: Date;
   updatedAt: Date;
}

/**
 * The return type of the Course model
 */
type CourseModel = Model<ICourse>;

export const courseSchema = new Schema<ICourse, CourseModel>(
   {
      name: { type: String, unique: true, required: true },
      description: { type: String, required: true },
      imageURL: { type: String, required: true },
      level: { type: String, required: true },
      isPublic: { type: Boolean },
      tags: { type: String },
      isCompleted: { type: Boolean },
      Module: [{ type: mongoose.Schema.Types.ObjectId, ref: "Module" }],
   },
   {
      timestamps: true,
   }
);

export type CourseDocument = typeof courseSchema;

export const Course = model<ICourse, CourseModel>("Course", courseSchema);
