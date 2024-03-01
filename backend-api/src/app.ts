import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { authRouter } from "./components/auth/routes";
import { journalRouter } from "./components/journals/routes";
import { auth } from "./middleware/auth";
import { userRouter } from "./components/users/routes";
import createHttpError from "http-errors";
import { errorHandler } from "./middleware/error-handler";
import { likeRouter } from "./components/likes/routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/api/auth", authRouter);
app.use("/api/journals", auth, journalRouter);
app.use("/api/users", auth, userRouter);
app.use("/api/comments", auth, journalRouter);
app.use("/api/likes", auth, likeRouter);

app.use((_req, _res, next) => {
  next(createHttpError(404));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
