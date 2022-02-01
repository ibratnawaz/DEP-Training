import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { User } from "./models/user";
import router from "./routes/userRoutes";

dotenv.config();

const PORT: string = process.env.PORT;

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", router);

User.sync();

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
