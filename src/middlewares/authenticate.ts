import { Request, Response, NextFunction } from "express";
import { User } from "../models/user";

export const authenticate = (config: { paranoid: boolean }) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await User.findByPk(req.params.id, config);
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
};
