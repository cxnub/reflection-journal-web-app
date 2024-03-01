import { Schema } from "express-validator";

export const createUserAccountSchema: Schema = {
  email: {
    notEmpty: {
      errorMessage: "Email is required",
    },
    exists: {
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Invalid email",
    },
  },
  password: {
    exists: {
      errorMessage: "Password is required",
    },
    notEmpty: {
      errorMessage: "Password is required",
    },
    isLength: {
      errorMessage: "Password must be at least 8 characters long",
      options: { min: 8 },
    },
  },
  username: {
    exists: {
      errorMessage: "Username is required",
    },
    notEmpty: {
      errorMessage: "Username is required",
    },
    isLength: {
      errorMessage: "Username must be between 4 to 25 characters long",
      options: { min: 4, max: 25 },
    },
  },
  image_url: {
    exists: {
      errorMessage: "Image URL is required",
    },
    notEmpty: {
      errorMessage: "Image URL is required",
    },
  },
};

export const loginSchema: Schema = {
  email: {
    notEmpty: {
      errorMessage: "Email is required",
    },
    exists: {
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Invalid email",
    },
  },
  password: {
    exists: {
      errorMessage: "Password is required",
    },
    notEmpty: {
      errorMessage: "Password is required",
    },
    isLength: {
      errorMessage: "Password must be at least 8 characters long",
      options: { min: 8 },
    },
  },
};
