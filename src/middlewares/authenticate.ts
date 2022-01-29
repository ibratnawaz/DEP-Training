import { Request, Response, NextFunction } from "express";
import { INTERNAL_SERVER_ERROR, NOT_FOUND } from "../constants/statusCode";
import { User } from "../models/user";

export const authenticate = (config: { paranoid: boolean }) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const user = await User.findByPk(req.params.id, config);
      if (user) {
        req.body["user"] = user;
        next();
      } else {
        res.status(NOT_FOUND).json({ error: "User does not exist." });
      }
    } catch (error: any) {
      res.status(INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  };
};
