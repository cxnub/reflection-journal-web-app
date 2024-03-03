/**
 * User login body entity
 * @interface
 * @property {string} email - The user's email
 * @property {string} password - The user's password
 */
export interface UserLoginBody {
    email: string;
    password: string;
}

/** 
 * User login response entity
 * @interface
 * @property {string} status - The status of the response
 * @property {string} message - The message of the response
 * @property {string} token - The token of the response
 * 
 * @example
 * {
 * status: "success",
 * message: "Login successful",
 * token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2FjY291bnRfaWQiOjEsImlhdCI6MTY0NzIwNzIwM30"
 *
 */
export interface UserLoginResponse {
    status: string;
    message: string;
    token: string;
}

interface error {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
}

export interface UserLoginErrorResponse {
    errors: error[];
}

/**
 * User register body entity
 * @interface
 * @property {string} email - The user's email
 * @property {string} password - The user's password
 * @property {string} username - The user's username
 * @property {string} image_url - The user's image URL
 */
export interface UserRegisterBody {
    email: string;
    password: string;
    username: string;
    image_url: string;
}

export interface UserRegisterErrorResponse {
    errors: error[];
}

/**
 * User register response entity
 * @interface
 * @property {string} status - The status of the response
 * @property {string} message - The message of the response
 * 
 * @example
 * {
 * status: "success",
 * message: "User account created"
 *
 */
export interface UserRegisterResponse {
    token: string;
    status: string;
    message: string;
}
