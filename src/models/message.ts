import mongoose, { model, Model, Schema } from "mongoose";
import { UserDocument } from "./user";


export interface IMessage {
  content: string;
  author: UserDocument;
  createdAt: Date;
  updatedAt: Date;
}

type MessageModel = Model<IMessage>;

export const messageSchema = new Schema<IMessage, MessageModel>(
  {
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },
  {
    timestamps: true,
  }
);

export type MessageDocument = typeof messageSchema;

export const Message = model<IMessage, MessageModel>("Message", messageSchema);