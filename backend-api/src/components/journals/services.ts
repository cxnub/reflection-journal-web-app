import connect from "../../database/db-connection";
import { Journal } from "../../models/journal";
const dbTableName = "journal";

async function getJournalById(id: number): Promise<Journal | null> {
    var result = null;
    try {
        const conn = await connect();
        const sql = `SELECT * FROM ${dbTableName} WHERE id = ?`;
        result = await conn.query(sql, [id]);
        console.log("result", result);
    } catch (error) {
        console.error("Error executing query", error);
        throw new error;
    }

    if (Array.isArray(result[0]) && result[0].length > 0) {
        return new Journal(JSON.parse(JSON.stringify(result[0][0])));
    } else {
        return null;
    }
}

async function createJournal(
    user_account_id: number,
    title: string,
    content: string,
    privacy_settings: number
    ): Promise<Journal> {
    const conn = await connect();

    // get current date and time
    const now = new Date();
    const created_at = now;

    const sql = `
INSERT INTO ${dbTableName} (user_account_id, title, content, privacy_ref_id, created_at)
VALUES (?, ?, ?, ?, ?);
SELECT * FROM ${dbTableName} WHERE id = LAST_INSERT_ID();
    `;

    const result = await conn.query(sql, [user_account_id, title, content, privacy_settings, created_at]);
    return new Journal(JSON.parse(JSON.stringify(result[0][1][0])));
}

export default { getJournalById, createJournal };
