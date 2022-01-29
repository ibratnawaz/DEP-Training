import { Request, Response } from "express";
import { User } from "../models/user";
import { v4 as uuidv4 } from "uuid";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await User.count({ where: { login: req.body.login } });
    if (user) {
      res.status(400).json({ error: "Email is already taken." });
    } else {
      const { firstName, lastName, age, login, password } = req.body;
      await User.create({
        id: uuidv4(),
        firstName,
        lastName,
        age,
        login,
        password,
      });

      res.status(201).json({ message: "User created!!" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = (req: Request, res: Response): void => {
  res.status(200).json({ user: req.body.user });
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const keys = Object.keys(User.rawAttributes);
    const { user } = req.body;

    keys.forEach((key) => {
      if (key in req.body) {
        user[key] = req.body[key];
      }
    });

    await user.save();
    res.status(200).json({ message: "User details updated!!" });

    /*
     * NOTE: For reference
     * Sending again a new request to db for updating
     * await User.update(
     *   { firstName, lastName, age, login, password },
     *   { where: { id: req.params.id } }
     * );
     */
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { user } = req.body;
    user.set({
      isDeleted: true,
    });
    await user.save();

    await user.destroy();

    res.status(200).json({ message: "User deleted!!" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const restoreUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await User.update(
      { isDeleted: false, deletedAt: null },
      {
        where: { id: req.params.id },
        paranoid: false,
      }
    );
    res.status(200).json({ message: "User restored!!" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getSoftDeltedUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.findAll({
      where: { isDeleted: true },
      paranoid: false,
    });
    res.status(200).json({ users });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
