import mongoose, { model, Model, Schema } from "mongoose";
import { MessageDocument } from "./message";

/**
 * Interface to modelate the Class Schema
 */
export interface IClass {
  name: string;
  content: string;
  videoURL: string;
  isCompleted: boolean;
  messages: MessageDocument[]
  createdAt: Date;
  updatedAt: Date;
}

/**
 * The return type of the User model
 */
type ClassModel = Model<IClass>;

export const classSchema = new Schema<IClass, ClassModel>(
  {
    name: { type: String, unique: true, required: true },
    content: { type: String },
    videoURL: { type: String, required: true },
    isCompleted: { type: Boolean },
    messages: [{type: mongoose.Schema.Types.ObjectId, ref: "Message"}]
  },
  {
    timestamps: true,
  }
);

export type ClassDocument = typeof classSchema;

export const Class = model<IClass, ClassModel>("Class", classSchema);
