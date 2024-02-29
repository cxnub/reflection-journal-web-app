import express from 'express';
import { getJournalById, createJournal } from './controllers';
import { body } from 'express-validator';

const journalRouter = express.Router();

journalRouter.get('/:id', getJournalById);
journalRouter.post('/', createJournal);

export default journalRouter;
