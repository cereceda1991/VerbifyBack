import { Request, Response } from "express";
import * as courseService from "../services/course.service";
import { ICourse } from "../models/course";

const getAll = async (req: Request, res: Response) => {
  try {
    const courses = await courseService.getAll();
    res.status(200).json(courses);
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
    const mod = await courseService.getOneById(id);
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

const getModulesFromCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;
    const response = await courseService.getModulesFromCourse(courseId);
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

const getOneModuleFromCourse = async (req: Request, res: Response) => {
  try {
    const { courseId, moduleId } = req.params;
    const response = await courseService.getOneModuleFromCourse(
      courseId,
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

const getCoursesPopulated = async (req:Request, res: Response) => {
  try {
    const coursesPopulated = await courseService.getCoursesPopulated();
    res.status(200).json(coursesPopulated);
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
}

const create = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const response = await courseService.create(body);
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
    const body: ICourse = req.body;
    const response = await courseService.updateOneById(id, body);
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
    const response = await courseService.deleteOneById(id);
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

export {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
  getModulesFromCourse,
  getOneModuleFromCourse,
  getCoursesPopulated
};
