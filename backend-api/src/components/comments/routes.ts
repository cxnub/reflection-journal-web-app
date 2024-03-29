import express from 'express';
import { getCommentsByJournalId, createComment, deleteComment } from './controllers';
import { validationHandler } from '../../middleware/validation-handler';
import { createCommentSchema } from './schemas';

export const authRouter = express.Router();

authRouter.post('/getCommentsByJournalId', getCommentsByJournalId);
authRouter.post('/createComment', ...validationHandler(createCommentSchema), createComment);
authRouter.delete('/deleteComment', deleteComment);
