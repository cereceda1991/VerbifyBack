import { Request, Response } from "express";
import * as messageService from "../services/message.service";
import { IMessage } from "../models/message";

const getAll = async (req: Request, res: Response) => {
  try {
    const messages = await messageService.getAll();
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: [
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
    const message = await messageService.getOneById(id);
    res.status(200).json(message);
  } catch (error) {
    console.error(error);
    res.status(400).json({
      error: [
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
    const { body } = req;
    const response = await messageService.create(body);
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
    const { id } = req.params;
    const { body } = req;
    const updatedMessage = await messageService.updateOneById(id, body);
    res.status(200).json(updatedMessage);
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
    const response = await messageService.deleteOneById(id);
    res.status(200).json(response);
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
