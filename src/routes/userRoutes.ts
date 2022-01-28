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
import { authenticate } from "../middlewares/authenticate";
import { validation } from "../middlewares/validate";

const router: Router = express.Router();

router.route("/").post(validation, createUser).get(getUsers);

router
  .route("/:id")
  .put(authenticate({ paranoid: true }), updateUser)
  .get(authenticate({ paranoid: true }), getUserById)
  .delete(authenticate({ paranoid: true }), deleteUser);

router.get("/restore/:id", authenticate({ paranoid: false }), restoreUser);

router.get("/soft-deletes/list", getSoftDeltedUsers);

export default router;
