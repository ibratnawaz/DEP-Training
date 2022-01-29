import Joi from "joi";

export const schema: Joi.ObjectSchema<any> = Joi.object({
  firstName: Joi.string()
    .pattern(new RegExp("^[a-zA-Z]{3,50}$"))
    .required()
    .messages({
      "string.pattern.base": "Please provide a valid name",
    }),
  lastName: Joi.string()
    .pattern(new RegExp("^[a-zA-Z]{1,50}$"))
    .required()
    .messages({
      "string.pattern.base": "Please provide a valid name",
    }),
  login: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,32}$"))
    .required()
    .messages({
      "string.pattern.base":
        "Password should be alphanumeric characters of length 6 to 32",
    }),
  age: Joi.number().integer().min(4).max(130).required().messages({
    "number.min": `Age should be between 4 to 130`,
    "number.max": `Age should be between 4 to 130`,
  }),
});
