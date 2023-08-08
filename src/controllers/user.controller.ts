import { Request, Response } from "express";
import * as userService from "../services/users.service";
import { IUser } from "../models/user";

const getAll = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      errors: [
        {
          code: error.code,
          message: error.message,
        },
      ],
    });
  }
};

const getOneById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getOneById(id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      errors: [
        {
          code: error.code,
          message: error.message,
        },
      ],
    });
  }
};

const getOneByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const user = await userService.getOneByEmail(email);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      errors: [
        {
          code: error.code,
          message: error.message,
        },
      ],
    });
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const bodyUser: IUser = {
      ...body,
      passwordHash: body.password,
    };

    const response = await userService.create(bodyUser);
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      errors: [
        {
          code: error.code,
          message: error.message,
        },
      ],
    });
  }
};

const updateById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    let body: IUser = req.body;

    if (req.body.password) {
      body = {
        ...req.body,
        passwordHash: req.body.password,
      };
    }

    const updatedUser = await userService.updateOneById(id, body);
    updatedUser.removePassword()
    
    res.status(201).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      errors: [
        {
          code: error.code,
          message: error.message,
        },
      ],
    });
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await userService.deleteOneById(id);
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      errors: [
        {
          code: error.code,
          message: error.message,
        },
      ],
    });
  }
};

export { getAll, getOneById, create, updateById, deleteById };
