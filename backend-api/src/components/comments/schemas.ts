import { Schema } from "express-validator";

export const createCommentSchema: Schema = {
    journal_id: {
        exists: {
            errorMessage: "Missing journal id."
        
        },
        notEmpty: {
            errorMessage: "Journal id cannot be empty."
        },
        isInt: {
            options: { min: 1 },
            errorMessage: "Journal id must be an integer."
        }
    },
    comment: {
        exists: {
            errorMessage: "Missing comment."
        
        },
        notEmpty: {
            errorMessage: "Comment cannot be empty."
        },
        isLength: {
            options: { min: 1, max: 65535 },
            errorMessage: "Comment must be between 1 and 65535 characters."
        }
    }
};
