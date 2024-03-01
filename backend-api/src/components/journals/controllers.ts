import express from "express";
import * as db from "./services";

export async function getJournalById(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const id = parseInt(req.params.id);
        const journal = await db.getJournalById(id);

        if (journal) {
            res.status(200).json(journal);
        } else {
            res.status(404).json({ message: "Journal not found" });
        }
    } catch (error) {
        next(error);
    }
}

export async function getAllJournalsByUserId(req: express.Request, res: express.Response, next: express.NextFunction) {

    try {
        const id = parseInt(req.params.id);
        const journals = await db.getAllJournalsByUserId(id);

        if (journals) {
            res.status(200).json(journals);
        } else {
            res.status(404).json({ message: "User has no journals" });
        }
    } catch (error) {
        next(error);
    }
    
}

export async function createJournal(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const { user_account_id, title, content, privacy_settings } = req.body;

        const journal = await db.createJournal(user_account_id, title, content, privacy_settings);
        res.status(201).json(journal);
    } catch (error) {
        next(error);
    }
}
