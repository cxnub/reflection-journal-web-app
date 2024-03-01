import express from 'express';
import * as db from './services';
import { hashPassword, comparePassword } from '../../utils/password-utils';
import { generateToken } from '../../utils/jwt-utils';
import { CustomRequest } from '../../middleware/auth';

export async function register(req: CustomRequest, res: express.Response, next: express.NextFunction) {
    try {
        // Get email and password from request body
        const { email, password, username, image_url } = req.body;

        // Check if email is already in use
        const account = await db.getUserAccountByEmail(email);

        // If email is already in use, return 400 status code
        if (account) {
            res.status(400).json({ message: "Email already in use" });
            return;
        }

        // If email is not in use, hash the password and create the user account
        const [salt, hashedPassword] = hashPassword(password);

        await db.createUserAccount(email, hashedPassword, salt, username, image_url);

        res.status(201).json({
            status: "success",
            message: "User account created"
        });
    } catch (error) {
        next(error);
    }
}

export async function login(req: CustomRequest, res: express.Response, next: express.NextFunction) {

        try {
            const { email, password } = req.body;

            const account = await db.getUserAccountByEmail(email);

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
