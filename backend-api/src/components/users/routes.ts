import express from "express";
import {
  getAllUserProfiles,
  getUserProfileById,
} from "./controllers";

export const userRouter = express.Router();

userRouter.get("/all", getAllUserProfiles);
userRouter.get("/:id", getUserProfileById);
