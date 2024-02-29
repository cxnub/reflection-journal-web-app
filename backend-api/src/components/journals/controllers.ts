import express from "express";
import db from "./services";

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
    const { user_account_id, title, content } = req.body;

    const journal = await db.createJournal(user_account_id, title, content);
    res.status(201).json(journal);
}
