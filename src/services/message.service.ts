import { Message, IMessage } from "../models/message";

const getAll = async () => {
  try {
    return await Message.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getOneById = async (id: string) => {
  try {
    return await Message.findById(id);
  } catch (err) {
    throw new Error(err);
  }
};

const create = async (body: IMessage) => {
  try {
    const newMessage = await Message.create(body);
    //TODO ARREGLAR ENDPOINT
    return newMessage
  } catch (err) {
    throw new Error(err);
  }
};

const updateOneById = async (id: string, body: Partial<IMessage>) => {
  try {
    const messageToUpdate = await Message.findById(id);
    if (!messageToUpdate) {
      throw new Error("No se encontro el mensaje");
    } else {
      await Message.findByIdAndUpdate({ _id: id }, body);
      return `Message updated successfully`;
    }
  } catch (err) {
    throw new Error(err);
  }
};

const deleteOneById = async (id: string) => {
  try {
    await Message.deleteOne({ _id: id });
    return `Message deleted successfully`;
  } catch (err) {
    throw new Error(err);
  }
};

export { getAll, getOneById, create, updateOneById, deleteOneById };
