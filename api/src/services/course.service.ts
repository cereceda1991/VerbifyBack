import { Course, ICourse } from "../models/course";

const getAll = async () => {
  try {
    return await Course.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getOneById = async (id: string) => {
  try {
    return await Course.findById(id);
  } catch (err) {
    throw new Error(err);
  }
};

const getModulesFromCourse = async (courseId: string) => {
  try {
    return (await Course.findById(courseId).populate("Module")).Module;
  } catch (err) {
    throw new Error(err);
  }
};

const getOneModuleFromCourse = async (courseId: string, moduleId: string) => {
  try {
    const modulesArray = await Course.findById(courseId).populate("Module");
    return modulesArray.Module.find((item) => item["_id"] == moduleId);
  } catch (err) {
    throw new Error(err);
  }
};

const getCoursesPopulated = async () => {
  try {
    const coursesPopulated = await Course.find().populate({path: "Module", populate:{ path: "classes"}})
    return coursesPopulated
  } catch (err) {
    throw new Error(err)
  }
}

const create = async (body: ICourse) => {
  try {
    await Course.create(body);
    return { message: `Course created successfully` };
  } catch (err) {
    throw new Error(err);
  }
};

const updateOneById = async (id: string, body: Partial<ICourse>) => {
  try {
    const courseToUpdate = await Course.findById(id);
    if (!courseToUpdate) {
      throw new Error(
        "No se encontro la clase que se esta buscando actualizar"
      );
    } else {
      await Course.findByIdAndUpdate({ _id: id }, body);
      return `Class updated successfully`;
    }
  } catch (err) {
    throw new Error(err);
  }
};

const deleteOneById = async (id: string) => {
  try {
    await Course.deleteOne({ _id: id });
    return `Course deleted succesfully`;
  } catch (err) {
    throw new Error(err);
  }
};

export {
  getAll,
  getOneById,
  create,
  updateOneById,
  deleteOneById,
  getModulesFromCourse,
  getOneModuleFromCourse,
  getCoursesPopulated
};


