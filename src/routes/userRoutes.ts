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

const router: Router = express.Router();

router.route("/").post(createUser).get(getUsers);

router.route("/:id").put(updateUser).get(getUserById).delete(deleteUser);

router.get("/restore/:id", restoreUser);

router.get("/soft-deletes/list", getSoftDeltedUsers);

export default router;
