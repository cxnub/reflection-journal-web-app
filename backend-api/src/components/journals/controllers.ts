import express from "express";
import db from "./services";
import { ExpressValidator, validationResult } from "express-validator";

export async function getJournalById(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);
    const journal = await db.getJournalById(id);

    if (journal) {
        res.status(200).json(journal);
    } else {
        res.status(404).json({ message: "Journal not found" });
    }
}

export async function createJournal(req: express.Request, res: express.Response) {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json(validationResult(req));
    }
    const { user_account_id, title, content, privacy_settings } = req.body;

    const journal = await db.createJournal(user_account_id, title, content, privacy_settings);
    res.status(201).json(journal);
}
