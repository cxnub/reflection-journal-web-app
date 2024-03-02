/**
 * The CommentJson interface.
 *
 * @interface CommentJson
 * @property {number} id - The id of the comment.
 * @property {number} user_account_id - The id of the user account that owns the comment.
 * @property {number} journal_id - The id of the journal that the comment belongs to.
 * @property {string} comment - The content of the comment.
 * @property {string} created_at - The date and time the comment was created.
 * @property {string} edited_at - The date and time the comment was last edited.
 *
 */
export type CommentJson = {
  id: number;
  user_account_id: number;
  journal_id: number;
  comment: string;
  created_at: string;
  edited_at: string;
};

/**
 * The Comment model.
 *
 * @class Comment
 * @property {number} id - The id of the comment.
 * @property {number} user_account_id - The id of the user account that owns the comment.
 * @property {number} journal_id - The id of the journal that the comment belongs to.
 * @property {string} comment - The content of the comment.
 * @property {string} created_at - The date and time the comment was created.
 * @property {string} edited_at - The date and time the comment was last edited.
 *
 * @method constructor - Creates a new Comment object.
 *
 * @example
 * let comment = new Comment({
 *   id: 1,
 *  user_account_id: 1,
 * journal_id: 1,
 * comment: "This is a comment.",
 * created_at: "2022-01-01T00:00:00.000Z",
 * edited_at: "2022-01-01T00:00:00.000Z"
 * });
 *
 */
export class Comment {
  id: number;
  user_account_id: number;
  journal_id: number;
  comment: string;
  created_at: string;
  edited_at: string;
  constructor(jsonObject: CommentJson) {
    Object.assign(this, jsonObject);
  }
}
