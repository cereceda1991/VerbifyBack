import { Module, IModule } from "../models/module";

const getAll = async () => {
  try {
    return await Module.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getOneById = async (id: string) => {
  try {
    return await Module.findById({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

//TODO arreglar endpoint
const getClassesFromModule = async (moduleId: string) => {
  try {
    const classes = (await Module.findById(moduleId).populate({path: 'classes'})).classes
     return classes
  } catch (err) {
     throw new Error(err);
  }
}

const getOneClassFromModule = async (moduleId: string, classId: string) => {
  try {
     const ClassesArray = await Module.findById(moduleId).populate({path: "classes"})
     return ClassesArray.classes.find(item => item['_id'] == classId)
  } catch (err) {
     throw new Error(err);
  }
}

const create = async (body: IModule) => {
  try {
    await Module.create(body);
    return { message: `Module created successfully` };
  } catch (err) {
    throw new Error(err);
  }
};

const updateOneById = async (id: string, body: Partial<IModule>) => {
  try {
    const moduleToUpdate = await Module.findById(id);
    if (!moduleToUpdate) {
      throw new Error(
        "No se encontro el modulo que se esta buscando actualizar"
      );
    } else {
    await Module.findOneAndUpdate({ _id: id }, body);
    return `Module updated successfully`;}
  } catch (err) {
    throw new Error(err);
  }
};

const deleteOneById = async (id: string) => {
  try {
    await Module.deleteOne({ _id: id });
    return `Module deleted succesfully`;
  } catch (err) {
    throw new Error(err);
  }
};
export { getAll, getOneById, create, updateOneById, deleteOneById, getClassesFromModule, getOneClassFromModule };
