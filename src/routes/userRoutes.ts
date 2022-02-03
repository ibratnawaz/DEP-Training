import express, { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  restoreUser,
  inactiveUsers,
  getAllUsers,
} from "../controllers/userController";
import { authenticate } from "../middlewares/authenticate";
import { userValidation } from "../middlewares/validate";

const router: Router = express.Router();

router.route("/").post(userValidation, createUser).get(getUsers);

/*
 * TODO: To check if the user is in soft-deleted or not, pass an
 *       object with paranoid property as true/false.
 */
router
  .route("/:id")
  .put(authenticate({ paranoid: true }), updateUser)
  .get(authenticate({ paranoid: true }), getUserById)
  .delete(authenticate({ paranoid: true }), deleteUser);

router.get("/restore/:id", authenticate({ paranoid: false }), restoreUser);

router.get("/inactive/list", inactiveUsers);

router.get("/all/list", getAllUsers);

export default router;
