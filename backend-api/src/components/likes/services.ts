import connect from "../../database/db-connection";
const dbTableName = "like";

export async function addLike(journalId: number, user_account_id: number): Promise<null> {
    const conn = await connect();

    const sql = `INSERT INTO ${dbTableName} (journal_id, user_account_id, created_at) VALUES (?, ?, NOW())`;
    await conn.query(sql, [journalId, user_account_id]);

    return;
}

export async function removeLike(journalId: number, user_account_id: number): Promise<null> {
    const conn = await connect();

    const sql = `DELETE FROM ${dbTableName} WHERE journal_id = ? AND user_account_id = ?`;
    await conn.query(sql, [journalId, user_account_id]);

    return;
}