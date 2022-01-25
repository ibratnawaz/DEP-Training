import sequelize from "../config/db.config";
import { DataTypes } from "sequelize";

export const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: { notEmpty: true },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: { msg: "Please prove valid first name." },
        notEmpty: {
          msg: "Fist name cannot be empty.",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: { msg: "Please prove valid first name." },
        notEmpty: {
          msg: "Fist name cannot be empty.",
        },
      },
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Please provide a valid login." },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: ["^[a-zA-Z0-9]{6,32}$"],
          msg: "The password should be only alphanumeric of length 6 to 32.",
        },
      },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { isNumeric: true, min: 4, max: 130 },
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    paranoid: true,
    createdAt: true,
    updatedAt: true,
  }
);
