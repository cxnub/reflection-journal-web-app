import connect from "../../database/db-connection";
import { Journal, JournalJson } from "../../models/journal";
const dbTableName = "journal";

export async function getJournalById(id: number): Promise<Journal | null> {
    var result = null;
    try {
        const conn = await connect();
        const sql = `SELECT * FROM ${dbTableName} WHERE id = ?`;
        result = await conn.query(sql, [id]);
        console.log("result", result);
    } catch (error) {
        throw new error;
    }

    if (Array.isArray(result[0]) && result[0].length > 0) {
        return new Journal(JSON.parse(JSON.stringify(result[0][0])));
    } else {
        return null;
    }
}

export async function getAllJournalsByUserId(user_account_id: number): Promise<Journal[] | null> {
    var result = null;
    try {
        const conn = await connect();
        const sql = `SELECT * FROM ${dbTableName} WHERE user_account_id = ?`;
        result = await conn.query(sql, [user_account_id]);
        console.log("result", result);
    } catch (error) {
        console.error("Error executing query", error);
        throw new error;
    }

    if (Array.isArray(result[0]) && result[0].length > 0) {
        var journalJsons = Array(JSON.parse(JSON.stringify(result[0])));
        return journalJsons.map((journalJson) => new Journal(journalJson));
    } else {
        return null;
    }
}

export async function createJournal(
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
