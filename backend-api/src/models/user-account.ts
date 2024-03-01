import { Schema } from "express-validator";

type UserAccountJson = {
    id: number;
    email: string;
    hashed_password: string;
    salt: string;
};

export default class UserAccount {
    id: number;
    email: string;
    hashed_password: string;
    salt: string;
    constructor(jsonObject: UserAccountJson) {
        Object.assign(this, jsonObject);
    }
}
