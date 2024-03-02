/**
 * The UserProfileJson interface.
 *
 * @interface UserProfileJson
 * @property {number} user_account_id - The id of the user account.
 * @property {string} username - The username of the user.
 * @property {string} created_at - The date and time the user account was created.
 * @property {string} image_url - The URL of the user's profile image.
 *
 */
export type UserProfileJson = {
  user_account_id: number;
  username: string;
  created_at: string;
  image_url: string;
};

/**
 * The UserProfile model.
 *
 * @class UserProfile
 * @property {number} user_account_id - The id of the user account.
 * @property {string} username - The username of the user.
 * @property {string} created_at - The date and time the user account was created.
 * @property {string} image_url - The URL of the user's profile image.
 *
 * @method constructor - Creates a new UserProfile object.
 *
 * @default
 * user_account_id = 0
 * username = ""
 * created_at = ""
 * image_url = ""
 *
 * @example
 * let userProfile = new UserProfile({
 *  user_account_id: 1,
 * username: "user1",
 * created_at: "2022-01-01T00:00:00.000Z",
 * image_url: "https://example.com/image.jpg"
 * });
 *
 */
export default class UserProfile {
  user_account_id: number;
  username: string;
  created_at: string;
  image_url: string;
  constructor(jsonObject: UserProfileJson) {
    Object.assign(this, jsonObject);
  }
}
