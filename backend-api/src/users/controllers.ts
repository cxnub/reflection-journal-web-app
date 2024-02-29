import express from "express";
import {
  createUserProfile,
  findAllUserProfiles,
  findUserProfileByPk,
} from "./services";

export async function getAllUsers(
  _req: express.Request,
  res: express.Response
) {
  try {
    const usersProfiles = await findAllUserProfiles();
    res.status(200).json({
      status: "success",
      message: "User profiles fetched",
      profiles: usersProfiles,
    });
  } catch (error) {
    console.error("Error executing query: ", error.stack);
    res.status(500).json({ status: "fail", message: "Internal Server Error" });
  }
}

export async function getUser(req: express.Request, res: express.Response) {
  try {
    const userProfile = await findUserProfileByPk(req.params.id);
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
    console.error("Error executing query: ", error.stack);
    res.status(500).json({ status: "fail", message: "Internal Server Error" });
  }
}

export async function addUser(req: express.Request, res: express.Response) {
  try {
    const { username, created_at, image_url } = req.body;
    const userProfile = await createUserProfile(req.body);
    res.status(201).json({
      status: "success",
      message: "User profile created",
      profile: userProfile,
    });
  } catch (error) {
    console.error("Error executing query: ", error.stack);
    res.status(500).json({ status: "fail", message: "Internal Server Error" });
  }
}
