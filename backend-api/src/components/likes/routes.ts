import express from 'express';
import { getLikesByJournalId, likeJournal, unlikeJournal } from './controllers';

export const likeRouter = express.Router();

likeRouter.post('/likeJournal/:id', likeJournal);
likeRouter.post('/unlikeJournal/:id', unlikeJournal);
likeRouter.get('/getLikesByJournalId/:id', getLikesByJournalId);
