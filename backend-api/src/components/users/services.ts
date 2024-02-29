import connect from "../../database/db-connection";
import UserProfile from "../../models/user-profile";
const dbTableName = "user_profile";

/**
 * Gets all user profiles.
 */
export async function findAllUserProfiles() {
  const conn = await connect();
  const sql = `SELECT * FROM ${dbTableName}`;
  const result = await conn.query(sql);
  return result;
}

/**
 * Gets a user profile by id.
 *
 * @param {string} id The user account id
 * @returns {Promise<UserProfile | null>} Promise object represents the user profile if found, else `null`.
 */
export async function findUserProfileByPk(
  id: string
): Promise<UserProfile | null> {
  const conn = await connect();
  const sql = `SELECT * FROM ${dbTableName} WHERE user_account_id = ?`;
  const result = await conn.query(sql, [id]);
  if (Array.isArray(result[0]) && result[0].length > 0) {
    return new UserProfile(JSON.parse(JSON.stringify(result[0][0])));
  } else {
    return null;
  }
}

/**
 * Creates a new user profile.
 *
 * @param {UserProfile} data The user profile details
 */
export async function createUserProfile(data: UserProfile) {
  const conn = await connect();
  const sql = `INSERT INTO ${dbTableName} (username, created_at, image_url) VALUES (?, ?, ?)`;
  const parameters = [data.username, data.created_at, data.image_url];
  const result = await conn.query(sql, [parameters]);
  return result;
}

/**
 * Edits a user profile.
 *
 * @param {string} id The user account id
 * @param {UserProfile} data The user profile details
 */
export async function editUserProfile(id: string, data: UserProfile) {
  null;
}

/**
 * Deletes a user profile.
 *
 * @param {string} id The user account id
 */
export async function deleteUserProfile(id: string) {
  null;
}
