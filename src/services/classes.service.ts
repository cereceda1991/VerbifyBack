import { Class, IClass } from "../models/class";

const getAll = async () => {
  try {
    return await Class.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getOneById = async (id: string) => {
  try {
    return await Class.findById(id);
  } catch (err) {
    throw new Error(err);
  }
};

const create = async (body: IClass) => {
  try {
    await Class.create(body);
    return { message: `Class created successfully` };
  } catch (err) {
    throw new Error(err);
  }
};

const updateOneById = async (id: string, body: Partial<IClass>) => {
  try {
    const classToUpdate = await Class.findById(id);
    if (!classToUpdate) {
      throw new Error(
        "No se encontro la clase que se esta buscando actualizar"
      );
    } else {
      await Class.findByIdAndUpdate({ _id: id }, body);
      return `Class updated successfully`;
    }
  } catch (err) {
    throw new Error(err);
  }
};

const deleteOneById = async (id: string) => {
  try {
    await Class.deleteOne({ _id: id });
    return `Class deleted succesfully`;
  } catch (err) {
    throw new Error(err);
  }
};
export { getAll, getOneById, create, updateOneById, deleteOneById };
