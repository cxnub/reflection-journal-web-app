import { Schema } from "express-validator";

/**
 * The LikeJson interface.
 * 
 * @interface LikeJson
 * @property {number} id - The id of the like.
 * @property {number} user_account_id - The id of the user account that owns the like.
 * @property {number} journal_id - The id of the journal that the like belongs to.
 * @property {string} created_at - The date and time the like was created.
 * 
 */
export type LikeJson = {
    id: number;
    user_account_id: number;
    journal_id: number;
    created_at: string;
}

/**
 * The Like model.
 * 
 * @class Like
 * @property {number} id - The id of the like.
 * @property {number} user_account_id - The id of the user account that owns the like.
 * @property {number} journal_id - The id of the journal that the like belongs to.
 * @property {string} created_at - The date and time the like was created.
 * 
 * @method constructor - Creates a new Like object.
 * 
 * @example
 * let like = new Like({
 *  id: 1,
 * user_account_id: 1,
 * journal_id: 1,
 * created_at: "2022-01-01T00:00:00.000Z"
 * });
 *  
 */
export class Like {
    id: number;
    user_account_id: number;
    journal_id: number;
    created_at: string;
    constructor(jsonObject: LikeJson) {
        Object.assign(this, jsonObject);
    }
}
