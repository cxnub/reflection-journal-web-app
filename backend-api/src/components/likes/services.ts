import connect from "../../database/db-connection";
import { Like } from "../../models/like";
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

export async function getLikesByJournalId(journalId: number): Promise<Like[] | null> {
    const conn = await connect();

    const sql = `SELECT * FROM ${dbTableName} WHERE journal_id = ?`;
    const result = await conn.query(sql, [journalId]);
    
    var likes = Array(result[0]).map((row: any) => new Like(row));

    if (likes.length === 0) {
        return null;
    }

    return likes;
}
