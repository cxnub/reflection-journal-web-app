import express from "express";
import {
  getAllUserProfiles,
  getUserProfileById,
  createUserProfile,
} from "./controllers";

const userRouter = express.Router();

userRouter.get("/", getAllUserProfiles);
userRouter.get("/:id", getUserProfileById);
userRouter.post("/add", createUserProfile);

export default userRouter;
