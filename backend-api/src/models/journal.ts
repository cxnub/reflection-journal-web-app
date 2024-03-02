/**
 * The JSON object that represents the journal model.
 *
 * @interface JournalJson
 * @property {number} id - The id of the journal.
 * @property {number} user_account_id - The id of the user account that owns the journal.
 * @property {string} title - The title of the journal.
 * @property {string} content - The content of the journal.
 * @property {string} created_at - The date and time the journal was created.
 * @property {string} edited_at - The date and time the journal was last edited.
 *
 */
export type JournalJson = {
  id?: number;
  user_account_id?: number;
  privacy_ref_id?: number;
  title?: string;
  content?: string;
  created_at?: string;
  edited_at?: string;
};

/**
 * The Journal model.
 *
 * @class Journal
 * @property {number} id - The id of the journal.
 * @property {number} user_account_id - The id of the user account that owns the journal.
 * @property {string} title - The title of the journal.
 * @property {string} content - The content of the journal.
 * @property {string} created_at - The date and time the journal was created.
 * @property {string} edited_at - The date and time the journal was last edited.
 *
 * @method constructor - Creates a new Journal object.
 *
 * @default
 * id = 0
 * user_account_id = 0
 * title = ""
 * content = ""
 * created_at = ""
 * edited_at = ""
 *
 * @example
 * let journal = new Journal({
 *    id: 1,
 *   user_account_id: 1,
 *  title: "My Journal",
 * content: "This is my journal.",
 * created_at: "2022-01-01T00:00:00.000Z",
 * edited_at: "2022-01-01T00:00:00.000Z"
 * });
 *
 */
export class Journal {
  id: number;
  user_account_id: number;
  title: string;
  content: string;
  created_at: string;
  edited_at: string;
  constructor(jsonObject: JournalJson) {
    Object.assign(this, jsonObject);
  }
}
