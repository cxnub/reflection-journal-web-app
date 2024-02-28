import express from 'express';
import { getUserAccountByEmail, createUserAccount } from './services';
import { hashPassword, comparePassword } from '../utils/password-utils';

async function register(req: express.Request, res: express.Response) {
    // Get email and password from request body
    const { email, password } = req.body;

    // Check if email is already in use
    const userAccount = await getUserAccountByEmail(email);

    // If email is already in use, return 400 status code
    if (Array.isArray(userAccount[0]) && userAccount[0].length > 0) {
        res.status(400).json({ message: "Email already in use" });
    } else {
        // If email is not in use, hash the password and create the user account
        const [salt, hashedPassword] = hashPassword(password);
        console.log(salt, hashedPassword);
        await createUserAccount(email, hashedPassword, salt);
        res.status(201).json({ message: "User account created" });
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    const [userAccount] = await getUserAccountByEmail(email);
    console.log(userAccount);
}

export { register, login };
