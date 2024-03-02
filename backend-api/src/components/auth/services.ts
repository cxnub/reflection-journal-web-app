import connect from "../../database/db-connection";
import userAccount from "../../models/user-account";
import UserProfile, { UserProfileJson } from "../../models/user-profile";
const dbTableName = "user_account";

/**
 * Creates a new user profile.
 *
 * @param {user_account_id} number The unique identifier for the user.
 * @param {username} string The username.
 * @param {image_url} string The profile image URL.
 */
async function createUserProfile(userAccountId: number, username: string, image_url: string) {
    const conn = await connect();
    const sql = `
INSERT INTO user_profile (user_account_id, username, created_at, image_url)
VALUES (?, ?, NOW(), ?);
SELECT * FROM user_profile WHERE user_account_id = ?;
`;

    const result = await conn.query(sql, [userAccountId, username, image_url, userAccountId]);

    return new UserProfile(JSON.parse(JSON.stringify(result[0])));
}

export async function getUserAccountByEmail(email: string): Promise<userAccount | null> {
    const conn = await connect();
    const sql = `SELECT * FROM ${dbTableName} WHERE email = ?`;
    const result = await conn.query(sql, [email]);

    if (Array.isArray(result[0]) && result[0].length > 0) {
        return new userAccount(JSON.parse(JSON.stringify(result[0][0])));
    } else {
        return null;
    }
}

export async function createUserAccount(
    email: string,
    hashedPassword: string,
    salt: string,
    username: string,
    image_url: string
): Promise<userAccount> {
    const conn = await connect();

    const sql = `
INSERT INTO ${dbTableName} (email, hashed_password, salt)
VALUES (?, ?, ?);
SELECT * FROM ${dbTableName} WHERE id = LAST_INSERT_ID();
    `;

    const result = await conn.query(sql, [email, hashedPassword, salt]);
    const newUserAccount = new userAccount(JSON.parse(JSON.stringify(result[0][1][0])));

    // create new user profile
    await createUserProfile(newUserAccount.id, username, image_url);

    return newUserAccount;
}

export async function deleteUserAccount(
    user_account_id: number
): Promise<boolean> {
    const conn = await connect();

    const sql = `
DELETE FROM user_profile WHERE user_account_id = ?;
DELETE FROM ${dbTableName} WHERE id = ?;
    `;

    const result = await conn.query(sql, [user_account_id, user_account_id]);
    const affectedRows = result[0][0].affectedRows + result[0][1].affectedRows;

    if (affectedRows == 2) {
        return true;
    } else {
        return false;
    }
}
