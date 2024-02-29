import express from "express";
import { getAllUsers, getUser, addUser } from "./controllers";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUser);
userRouter.post("/add", addUser);

export default userRouter;
