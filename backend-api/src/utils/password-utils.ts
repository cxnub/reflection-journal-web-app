import bcrypt from "bcryptjs";
import UserAccount from "../models/user-account";

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return [salt, hash];
}

function comparePassword(password: string, account: UserAccount) {
    const newHash = bcrypt.hashSync(password, account.salt);
    return newHash === account.hashed_password;
}

export { hashPassword, comparePassword };
