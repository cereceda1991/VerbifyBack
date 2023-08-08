import {
  create,
  deleteById,
  getAll,
  getClassesFromModule,
  getOneById,
  getOneClassFromModule,
  updateById,
} from "../controllers/module.controller";
import { Router } from "express";

const router: Router = Router();

router.get("/", getAll);
router.get("/:id", getOneById);
router.post("/", create);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

router.get("/:moduleId/classes", getClassesFromModule)
router.get("/:moduleId/classes/:classId", getOneClassFromModule)


export { router as moduleRouter };

