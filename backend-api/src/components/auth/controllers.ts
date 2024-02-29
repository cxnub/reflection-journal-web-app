import express from 'express';
import * as services from './services';
import { hashPassword, comparePassword } from '../../utils/password-utils';
import { generateToken } from '../../utils/jwt-utils';

async function register(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        // Get email and password from request body
        const { email, password } = req.body;

        // If email or password is undefined, return 400 status code
        if (email === undefined || password === undefined) {
            res.status(400).json({ message: "Undefined email or password" });
            return;
        }

        // Check if email is already in use
        const account = await services.getUserAccountByEmail(email);

        // If email is already in use, return 400 status code
        if (account) {
            res.status(400).json({ message: "Email already in use" });
            return;
        }

        // If email is not in use, hash the password and create the user account
        const [salt, hashedPassword] = hashPassword(password);

        await services.createUserAccount(email, hashedPassword, salt);

        res.status(201).json({
            status: "success",
            message: "User account created"
        });
    } catch (error) {
        next(error);
    }
}

async function login(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const { email, password } = req.body;

        if (email === undefined || password === undefined) {
            res.status(400).json({ message: "Undefined email or password" });
            return;
        }

        const account = await services.getUserAccountByEmail(email);

        if (!account) {
            res.status(403).json({ message: "Invalid email or password" });
            return;
        }

        if (comparePassword(password, account)) {
            res.status(200).json({
                status: "success",
                message: "Login successful",
                token: generateToken(account)
            });
            return;
        }
    } catch (error) {
        next(error);
    }
}

    export { register, login };
