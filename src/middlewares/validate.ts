import { schema } from "../utils/joiValidation";
import { Request, Response, NextFunction } from "express";

export const validation = (req: Request, res: Response, next: NextFunction) => {
  let nextStep = true;
  const keys = ["firstName", "lastName", "login", "password", "age"];

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

const isKeyPresent = (key: string, req: Request) => {
  return key in req.body;
};
