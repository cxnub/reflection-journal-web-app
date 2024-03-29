import connect from "../../database/db-connection";
import UserProfile from "../../models/user-profile";
const dbTableName = "user_profile";

/**
 * Gets all user profiles.
 */
export async function getAllUserProfiles() {
  const conn = await connect();
  const sql = `SELECT * FROM ${dbTableName}`;
  const result = await conn.query(sql);

  if (Array.isArray(result[0]) && result[0].length > 0) {
    const userProfiles: UserProfile[] = result[0].map(
      (row: any) => new UserProfile(JSON.parse(JSON.stringify(row)))
    );
    return userProfiles;
  } else {
    return null;
  }
}

/**
 * Gets a user profile by id.
 *
 * @param {number} id The user account id
 * @returns {Promise<UserProfile | null>} Promise object represents the user profile if found, else `null`
 */
export async function getUserProfileById(
  id: number
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
 * Gets a user profile by username.
 * 
 * @param {string} username The username
 * @returns {Promise<UserProfile | null>} Promise object represents the user profile if found, else `null`
 * @example
 * const userProfile = await getUserProfileByUsername("test");
 */
export async function getUserProfileByUsername(
  username: string
): Promise<UserProfile | null> {
  const conn = await connect();
  const sql = `SELECT * FROM ${dbTableName} WHERE username = ?`;
  const result = await conn.query(sql, [username]);
  if (Array.isArray(result[0]) && result[0].length > 0) {
    return new UserProfile(JSON.parse(JSON.stringify(result[0][0])));
  } else {
    return null;
  }
}

/**
 * Edits a user profile.
 *
 * @param {number} id The user account id
 * @param {UserProfile} data The user profile details
 */
export async function editUserProfile(id: number, data: UserProfile) {
  throw Error("Method is not implemented.");
}

/**
 * Deletes a user profile.
 *
 * @param {number} id The user account id
 */
export async function deleteUserProfile(id: number) {
  throw Error("Method is not implemented.");
}
