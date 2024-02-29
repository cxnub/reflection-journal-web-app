import { Schema } from "express-validator";

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
type JournalJson = {
    id: number;
    user_account_id: number;
    title: string;
    content: string;
    created_at: string;
    edited_at: string;
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

export const createJournalSchema: Schema = {
    user_account_id: {
        exists: {
            errorMessage: "Missing user account id."
        
        },
        notEmpty: {
            errorMessage: "User account id cannot be empty."
        },
        isInt: {
            options: { min: 1 },
            errorMessage: "User account id must be an integer."
        }
    },
    title: {
        exists: {
            errorMessage: "Missing title."
        
        },
        notEmpty: {
            errorMessage: "Title cannot be empty."
        },
        isLength: {
            options: { min: 1, max: 255 },
            errorMessage: "Title must be between 1 and 255 characters."
        }
    },
    content: {
        exists: {
            errorMessage: "Missing content."
        
        },
        notEmpty: {
            errorMessage: "Content cannot be empty."
        },
        isLength: {
            options: { min: 1, max: 65535 },
            errorMessage: "Content must be between 1 and 65535 characters."
        }
    },
    privacy_settings: {
        isIn: {
            options: [[1, 2]]
        },
        exists: {
            errorMessage: "Missing privacy settings."
        
        },
        notEmpty: {
            errorMessage: "Privacy settings cannot be empty."
        }
    }
};
