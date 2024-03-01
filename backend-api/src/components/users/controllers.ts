import express from "express";
import * as db from "./services";
import UserProfile from "../../models/user-profile";
import { CustomRequest } from "../../middleware/auth";

export async function getAllUserProfiles(
    _req: CustomRequest,
    res: express.Response,
    next: express.NextFunction
) {
    try {
        const userProfiles = await db.getAllUserProfiles();
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
    req: CustomRequest,
    res: express.Response,
    next: express.NextFunction
) {
    try {
        const userProfile = await db.getUserProfileById(req.params.id);
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
