import bcrypt from "bcryptjs";

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return [salt, hash];
}

function comparePassword(password, salt, hash) {
    const newHash = bcrypt.hashSync(password, salt);
    return newHash === hash;
}

export { hashPassword, comparePassword };
