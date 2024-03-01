import connect from "../../database/db-connection";
const dbTableName = "comment";

export async function getCommentsByJournalId(journalId: number): Promise<Comment[] | null> {
    const conn = await connect();
    const sql = `SELECT * FROM ${dbTableName} WHERE journal_id = ?`;
    const result = await conn.query(sql, journalId);

    if (Array.isArray(result[0]) && result[0].length > 0) {
        return result[0].map((row: any) => new Comment(row));
    } else {
        return null;
    }
}

export async function createComment(
    userAccountId: number,
    journalId: number,
    comment: string
): Promise<Comment> {
    const conn = await connect();

    const sql = `
INSERT INTO ${dbTableName} (user_account_id, journal_id, comment, created_at)
VALUES (?, ?, ?, NOW());
SELECT * FROM ${dbTableName} WHERE id = LAST_INSERT_ID();
    `;
    const result = await conn.query(sql, [userAccountId, journalId, comment]);

    const newComment = new Comment(JSON.parse(JSON.stringify(result[0])));

    return newComment;
}