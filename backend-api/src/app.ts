import express, { Express, Request, Response } from "express";
import https from "https";
import fs from "fs";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { authRouter } from "./components/auth/routes";
import { journalRouter } from "./components/journals/routes";
import { auth } from "./middleware/auth";
import { userRouter } from "./components/users/routes";
import createHttpError from "http-errors";
import { errorHandler } from "./middleware/error-handler";
import { likeRouter } from "./components/likes/routes";

dotenv.config();

const key = fs.readFileSync("sslcert/selfsigned.key");
const cert = fs.readFileSync("sslcert/selfsigned.crt");
const options = {
  key: key,
  cert: cert,
};
const corsOptions = {
  origin: "https://localhost:5173",
  optionsSuccessStatus: 200,
};

const app: Express = express();
const port = parseInt(process.env.PORT) || 3000;

app.use(bodyParser.json());
app.use(cors(corsOptions));

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


const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
