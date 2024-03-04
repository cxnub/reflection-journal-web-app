import express from 'express';
import { deleteUserAccount, login, register } from './controllers';
import { validationHandler } from '../../middleware/validation-handler';
import { createUserAccountSchema, loginSchema } from './schemas';
import { auth } from '../../middleware/auth';

export const authRouter = express.Router();

authRouter.post('/register', ...validationHandler(createUserAccountSchema), register);
authRouter.post('/login', ...validationHandler(loginSchema), login);
authRouter.delete('/delete', deleteUserAccount);
authRouter.get('/checkToken', auth, (req, res) => {
    res.status(200).json({ message: 'Token is valid' });
});
