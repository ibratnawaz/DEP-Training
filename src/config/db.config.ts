import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("\nConnection has been established successfully.\n");
  })
  .catch((err) => {
    console.error(`\nUnable to connect to the database: ${err}\n`);
  });

export default sequelize;
