import { schema } from "./users.joiValidation";
import { Request, Response, NextFunction } from "express";

export const validation = (User: { rawAttributes: {} }) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    let nextStep = true;
    const userCoulmns = Object.keys(User.rawAttributes);
    const keys = userCoulmns.slice(1, 6);

    for (let index = 0; index < keys.length; index++) {
      if (!isKeyPresent(keys[index], req)) {
        res.status(400).json({ error: `${keys[index]} is not present` });
        nextStep = false;
        break;
      }
    }

    if (nextStep) {
      const { firstName, lastName, login, password, age } = req.body;
      const { error } = schema.validate(
        { firstName, lastName, login, password, age },
        { abortEarly: false }
      );
      if (error) {
        res.status(400).json({ error: error.message });
      } else {
        next();
      }
    }
  };
};

const isKeyPresent = (key: string, req: Request): boolean => {
  return key in req.body;
};
