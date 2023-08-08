import { User, IUser, IUserMethods } from "../models/user";

const getAll = async () => {
  try {
    return await User.find();
  } catch (err) {
    throw new Error(err);
  }
};

const getOneById = async (id: string) => {
  try {
    return await User.findById({ _id: id });
  } catch (err) {
    throw new Error(err);
  }
};

const getOneByEmail = async (email: string) => {
try {
  return await User.find({email: email})
} catch (err) {
  throw new Error(err)
}
}

const create = async (body: IUser) => {
  return User.create(body);
};

const updateOneById = async (
  id: string,
  body: Partial<IUser>
): Promise<IUser & IUserMethods> => {
  const existingUser = await User.findById(id);

  if (!existingUser) {
    throw new Error("User not found");
  }

  Object.assign(existingUser, body);

  return existingUser.save();
};

const deleteOneById = async (id: string) => {
  try {
    await User.deleteOne({ _id: id });
    return `User deleted succesfully`;
  } catch (err) {
    throw new Error(err);
  }
};
export { getAll, getOneById, create, updateOneById, deleteOneById, getOneByEmail };
