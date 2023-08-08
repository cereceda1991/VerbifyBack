import { Request, Response } from "express";
import * as classService from "../services/classes.service";
import { IClass } from "../models/class";

const getAll = async (req: Request, res: Response) => {
   try {
      const modules = await classService.getAll();
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
      const mod = await classService.getOneById(id);
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

const create = async (req: Request, res: Response) => {
   try {
      const { body } = req;
      const response = await classService.create(body);
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
      const body: IClass = req.body;
      const response = await classService.updateOneById(id, body);
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
      const response = await classService.deleteOneById(id);
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
