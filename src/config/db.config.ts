import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize: Sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    // TODO: For reference- in dialect any one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("\nConnection has been established successfully.\n");
  })
  .catch((error) => {
    console.error(`\nUnable to connect to the database: ${error}\n`);
  });

export default sequelize;
