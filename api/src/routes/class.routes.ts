import {
  create,
  deleteById,
  getAll,
  getOneById,
  updateById,
} from "../controllers/class.controller";
import { Router } from "express";

const router: Router = Router();

router.get("/", getAll);
router.get("/:id", getOneById);
router.post("/", create);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

export {router as classRouter};
