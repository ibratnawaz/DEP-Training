import express, { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  restoreUser,
  getSoftDeltedUsers,
} from "../controllers/userController";
import {
  checkDuplicateEmail,
  checkUserPresent,
  checkUserWithSoftDelete,
} from "../middlewares/authenticate";
import { payloadValidation } from "../middlewares/validate";

const router: Router = express.Router();

router
  .route("/")
  .post([payloadValidation, checkDuplicateEmail], createUser)
  .get(getUsers);

router
  .route("/:id")
  .put(checkUserPresent, updateUser)
  .get(checkUserPresent, getUserById)
  .delete(checkUserPresent, deleteUser);

router.get("/restore/:id", checkUserWithSoftDelete, restoreUser);

router.get("/soft-deletes/list", getSoftDeltedUsers);

export default router;
