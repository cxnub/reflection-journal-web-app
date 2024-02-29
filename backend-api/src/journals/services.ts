import connect from "../database/db-connection";
import { Journal, CreateJournalSchema } from "../models/journal";
const dbTableName = "journal";

async function getJournalById(id: number): Promise<Journal | null> {
    const conn = await connect();
    const sql = `SELECT * FROM ${dbTableName} WHERE id = ?`;
    const result = await conn.query(sql, [id]);

    if (Array.isArray(result[0]) && result[0].length > 0) {
        return new Journal(JSON.parse(JSON.stringify(result[0][0])));
    } else {
        return null;
    }
}

async function createJournal(
    user_account_id: number,
    title: string,
    content: string
    ): Promise<Journal> {
    const conn = await connect();

    // get current date and time
    const now = new Date();
    const created_at = now.toISOString();

    const sql = `
INSERT INTO ${dbTableName} (user_account_id, title, content, created_at)
VALUES (?, ?, ?);
    `;
    
    const result = await conn.query(sql, [user_account_id, title, content, created_at]);
    return new Journal(JSON.parse(JSON.stringify(result[0][0])));
}

export default { getJournalById, createJournal };
