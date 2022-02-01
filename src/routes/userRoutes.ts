import express, { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  restoreUser,
  getSoftDeletedUsers,
  getAllUsers,
} from "../controllers/userController";
import { authenticate } from "../middlewares/authenticate";
import { validation } from "../middlewares/validate";
import { User } from "../models/user";

const router: Router = express.Router();

/*
 * NOTE: Pass the model name on which validation is required.
 */
router.route("/").post(validation(User), createUser).get(getUsers);

/*
 * NOTE: To check if the user is in soft-deleted or not, pass an
 *       object with paranoid property as true/false.
 */
router
  .route("/:id")
  .put(authenticate({ paranoid: true }), updateUser)
  .get(authenticate({ paranoid: true }), getUserById)
  .delete(authenticate({ paranoid: true }), deleteUser);

router.get("/restore/:id", authenticate({ paranoid: false }), restoreUser);

router.get("/soft-deletes/list", getSoftDeletedUsers);

router.route("/all/list").get(getAllUsers);

export default router;
