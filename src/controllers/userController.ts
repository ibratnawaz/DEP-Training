import { Request, Response } from "express";
import { User } from "../models/user";
import { v4 as uuidv4 } from "uuid";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
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
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "No such user found!!" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, age, login } = req.body;
    await User.update(
      { firstName, lastName, age, login },
      { where: { id: req.params.id } }
    );

    res.status(200).json({ message: "User details updated!!" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id);
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

export const restoreUser = async (req: Request, res: Response) => {
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

export const getSoftDeltedUsers = async (req: Request, res: Response) => {
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