import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import jwtConfig from '../config/jwt.config';

declare module "jsonwebtoken" {
    export interface JwtPayload {
        user_account_id: number;
    }
}
export interface CustomRequest extends Request {
    user_account_id: number;
}

export async function auth(req: Request, res: Response, next: NextFunction) {
    try {
        console.log(req.url)
        const token = req.headers.authorization.replace('Bearer ', '');

        if (!token) {
            throw new Error();
        }

        const decoded = <JwtPayload>jwt.verify(token, jwtConfig.SECRET);
        (req as CustomRequest).user_account_id = decoded.user_account_id;

        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};
