import { error } from "console";
import connect from "../../database/db-connection";
import userAccount from "../../models/user-account";
const dbTableName = "user_account";

async function getUserAccountByEmail(email: string): Promise<userAccount | null> {
    const conn = await connect();
    const sql = `SELECT * FROM ${dbTableName} WHERE email = ?`;
    const result = await conn.query(sql, [email]);

    if (Array.isArray(result[0]) && result[0].length > 0) {
        return new userAccount(JSON.parse(JSON.stringify(result[0][0])));
    } else {
        return null;
    }
}

async function createUserAccount(
    email: string,
    hashedPassword: string,
    salt: string
): Promise<userAccount> {
    const conn = await connect();

    const sql = `
INSERT INTO ${dbTableName} (email, hashed_password, salt)
VALUES (?, ?, ?);
SELECT * FROM ${dbTableName} WHERE id = LAST_INSERT_ID();
    `;

    const result = await conn.query(sql, [email, hashedPassword, salt]);
    return JSON.parse(JSON.stringify(result[0][1][0]));
}

export { getUserAccountByEmail, createUserAccount };