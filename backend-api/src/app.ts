import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRouter from "./components/auth/routes";
import journalRouter from "./components/journals/routes";
import { auth } from "./middleware/auth";
import userRouter from "./components/users/routes";
import { errorHandler } from "./middleware/error-handler";
import createHttpError from "http-errors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api/auth", authRouter);
app.use("/api/journals", auth, journalRouter);
app.use("/api/users", auth, userRouter);

app.use(function(req, res, next) {
  next(createHttpError(404));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});