import express from 'express';
import { likeJournal, unlikeJournal } from './controllers';

export const likeRouter = express.Router();

likeRouter.post('/likeJournal/:id', likeJournal);
likeRouter.post('/unlikeJournal/:id', unlikeJournal);
