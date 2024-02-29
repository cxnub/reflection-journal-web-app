import express from "express";
import * as services from "./services";
import UserProfile from "../../models/user-profile";

export async function getAllUserProfiles(
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const userProfiles = await services.getAllUserProfiles();
    if (!userProfiles) {
      return res
        .status(404)
        .json({ status: "fail", message: "User profiles not found" });
    }
    res.status(200).json({
      status: "success",
      message: "User profiles fetched",
      profiles: userProfiles,
    });
  } catch (error) {
    next(error);
  }
}

export async function getUserProfileById(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const userProfile = await services.getUserProfileById(req.params.id);
    if (!userProfile) {
      return res
        .status(404)
        .json({ status: "fail", message: "User profile not found" });
    }
    res.status(200).json({
      status: "success",
      message: "User profile fetched",
      profile: userProfile,
    });
  } catch (error) {
    next(error);
  }
}

export async function createUserProfile(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const newUserProfile = new UserProfile(req.body);
    await services.createUserProfile(newUserProfile);
    res.status(201).json({
      status: "success",
      message: "User profile created",
      profile: newUserProfile,
    });
  } catch (error) {
    next(error);
  }
}