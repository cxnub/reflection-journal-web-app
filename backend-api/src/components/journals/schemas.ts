import { Schema } from "express-validator";

export const updateJournalSchema: Schema = {
    title: {
        notEmpty: {
            errorMessage: "Title cannot be empty."
        },
        isLength: {
            options: { min: 1, max: 255 },
            errorMessage: "Title must be between 1 and 255 characters."
        }
    },
    content: {
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
        notEmpty: {
            errorMessage: "Privacy settings cannot be empty."
        }
    }
};

export const createJournalSchema : Schema = {
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