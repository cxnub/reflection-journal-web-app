import express from "express";
import * as db from "./services";
import { CustomRequest } from "../../middleware/auth";

export async function getCommentsByJournalId(req: CustomRequest, res: express.Response, next: express.NextFunction) {
    try {
        const journalId = parseInt(req.params.id);
        const comments = await db.getCommentsByJournalId(journalId);

        if (comments) {
            res.status(200).json(comments);
        } else {
            res.status(404).json({ message: "Comments not found" });
        }
    } catch (error) {
        next(error);
    }
}

export async function createComment(req: CustomRequest, res: express.Response, next: express.NextFunction) {
    try {
        const { journal_id, content } = req.body;
        const user_account_id = req.user_account_id;

        const comment = await db.createComment(user_account_id, journal_id, content);
        res.status(201).json(comment);
    } catch (error) {
        next(error);
    }
}

export async function deleteComment(req: CustomRequest, res: express.Response, next: express.NextFunction) {
    try {
        const commentId = parseInt(req.params.id);
        const success = await db.deleteComment(commentId);

        if (success) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: "Comment not found" });
        }
    } catch (error) {
        next(error);
    }
}
