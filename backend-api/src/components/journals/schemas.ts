import { Schema } from "express-validator";

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