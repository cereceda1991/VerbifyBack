import { Request, Response } from "express";
import * as moduleService from "../services/modules.service";
import { IModule } from "../models/module";

const getAll = async (req: Request, res: Response) => {
  try {
    const modules = await moduleService.getAll();
    res.status(200).json(modules);
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
    const mod = await moduleService.getOneById(id);
    res.status(200).json(mod);
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

const getClassesFromModule = async (req: Request, res: Response) => {
  try {
    const { moduleId } = req.params;
    const response = await moduleService.getClassesFromModule(
      moduleId
    );
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

const getOneClassFromModule = async (req: Request, res: Response) => {
  try {
    const { moduleId, classId } = req.params;
    const response = await moduleService.getOneClassFromModule(
      moduleId,
      classId
    );
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

const create = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const response = await moduleService.create(body);
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
    const body: IModule = req.body;
    const response = await moduleService.updateOneById(id, body);
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

const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await moduleService.deleteOneById(id);
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

export { getAll, getOneById, create, updateById, deleteById, getClassesFromModule, getOneClassFromModule };
