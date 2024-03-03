import express from "express";
import {
  getAllUserProfiles,
  getUserProfileById,
  getUserProfileByUsername,
} from "./controllers";

export const userRouter = express.Router();

userRouter.get("/all", getAllUserProfiles);
userRouter.get("/:id", getUserProfileById);
userRouter.get("/:username", getUserProfileByUsername);
