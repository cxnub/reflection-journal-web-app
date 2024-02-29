import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import jwtConfig from '../config/jwt.config';

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

async function auth(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization.replace('Bearer ', '');

        if (!token) {
            throw new Error();
        }

        const decoded = jwt.verify(token, jwtConfig.SECRET);
        (req as CustomRequest).token = decoded;

        next();
    } catch (err) {
        res.status(401).send('Please authenticate');
    }
};

export { auth };
