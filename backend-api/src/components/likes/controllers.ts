import { CustomRequest } from "../../middleware/auth";
import express from "express";
import * as db from "./services";

export async function likeJournal(
    req: CustomRequest,
    res: express.Response,
    next: express.NextFunction
) {
    try {
        const journalId = parseInt(req.params.id);
        const userId = req.user_account_id;

        await db.addLike(journalId, userId);

        res.status(200).json({ status: "success", message: "Journal liked" });
    } catch (error) {
        next(error);
    }
}

export async function unlikeJournal(
    req: CustomRequest,
    res: express.Response,
    next: express.NextFunction
) {
    try {
        const journalId = parseInt(req.params.id);
        const userId = req.user_account_id;

        await db.removeLike(journalId, userId);

        res.status(200).json({ status: "success", message: "Journal unliked" });
    } catch (error) {
        next(error);
    }
}
