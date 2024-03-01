import express from 'express';
import { login, register } from './controllers';
import { validationHandler } from '../../middleware/validation-handler';
import { createUserAccountSchema, loginSchema } from './schemas';

export const authRouter = express.Router();

authRouter.post('/register', ...validationHandler(createUserAccountSchema), register);
authRouter.post('/login', ...validationHandler(loginSchema), login);
