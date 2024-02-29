import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRouter from "./auth/routes";
import journalRouter from "./journals/routes";
import { auth } from "./middleware/auth";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api/auth", authRouter);
app.use("/api/journal", auth, journalRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});