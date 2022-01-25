import { Request, Response, NextFunction } from "express";
import { User } from "../models/user";

export const checkDuplicateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.count({ where: { login: req.body.login } });
    if (user) {
      res.status(400).json({ error: "Email is already taken." });
    } else {
      next();
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const checkUserPresent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getUser(req, res, next, true);
};

export const checkUserWithSoftDelete = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  getUser(req, res, next, false);
};

const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
  paranoid: boolean
) => {
  try {
    const user = await User.findByPk(req.params.id, { paranoid });
    if (user) {
      req.body["user"] = user;
      next();
    } else {
      res.status(400).json({ error: "User does not exist." });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
