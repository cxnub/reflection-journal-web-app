import connect from "../../database/db-connection";
import { Journal, JournalJson } from "../../models/journal";
const dbTableName = "journal";

export async function getJournalById(id: number): Promise<Journal | null> {

    const conn = await connect();
    const sql = `SELECT * FROM ${dbTableName} WHERE id = ?`;
    var result = await conn.query(sql, [id]);

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
        const sql = `
SELECT *
FROM ${dbTableName}
INNER JOIN user_profile ON user_profile.user_account_id = journal.user_account_id
WHERE journal.user_account_id = ?;
        `;
        result = await conn.query(sql, [user_account_id]);

    } catch (error) {
        console.error("Error executing query", error);
        throw error;
    }

    if (Array.isArray(result[0]) && result[0].length > 0) {
        return result[0];
    } else {
        return null;
    }
}

export async function updateJournal(journal: Journal): Promise<Journal | null> {
    const conn = await connect();

    const sql = `UPDATE ${dbTableName} SET ` +
    Array.from(Object.keys(journal)).map((key) => `${key} = ?`).join(", ") +
    `edited_date = NOW() WHERE id = ?;` +
    `SELECT * FROM ${dbTableName} WHERE id = ?;`;

    const result = await conn.query(sql, [...Object.values(journal), journal.id, journal.id]);

    return new Journal(JSON.parse(JSON.stringify(result[0][1][0])));
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

export async function deleteJournal(journalId: number): Promise<boolean> {
    const conn = await connect();
    const sql = `DELETE FROM ${dbTableName} WHERE id = ?`;
    const result = await conn.query(sql, journalId);

    return JSON.parse(JSON.stringify(result[0])).affectedRows === 1;
}
