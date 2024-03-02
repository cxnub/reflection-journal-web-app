/**
 * The UserAccountJson interface.
 *
 * @interface UserAccountJson
 * @property {number} id - The id of the user account.
 * @property {string} email - The email of the user account.
 * @property {string} hashed_password - The hashed password of the user account.
 * @property {string} salt - The salt used to hash the password.
 *
 */
type UserAccountJson = {
  id: number;
  email: string;
  hashed_password: string;
  salt: string;
};

/**
 * The UserAccount model.
 *
 * @class UserAccount
 * @property {number} id - The id of the user account.
 * @property {string} email - The email of the user account.
 * @property {string} hashed_password - The hashed password of the user account.
 * @property {string} salt - The salt used to hash the password.
 *
 * @method constructor - Creates a new UserAccount object.
 *
 * @default
 * id = 0
 * email = ""
 * hashed_password = ""
 * salt = ""
 *
 * @example
 * let userAccount = new UserAccount({
 *  id: 1,
 * email: "user1@gmail.com",
 * hashed_password: "hashedpassword",
 * salt: "salt"
 *
 */
export default class UserAccount {
  id: number;
  email: string;
  hashed_password: string;
  salt: string;
  constructor(jsonObject: UserAccountJson) {
    Object.assign(this, jsonObject);
  }
}
