import { Router } from "express";
import * as TaskController from "../controlles/task.Controller.js";
const router = Router();
router.post("/", TaskController.createTask);
router.get("/", TaskController.getTasks);
router.get("/:id", TaskController.getTaskById);
router.patch("/:id", TaskController.patchTask);
router.put("/:id", TaskController.putTask);
router.delete("/:id", TaskController.deleteTask);
export default router;
//# sourceMappingURL=tasks.js.map