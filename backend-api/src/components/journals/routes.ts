import express from 'express';
import { getJournalById, createJournal, getAllJournalsByUserId } from './controllers';
import { validationHandler } from '../../middleware/validation-handler';
import { createJournalSchema } from './schemas';

export const journalRouter = express.Router();

journalRouter.get('/:id', getJournalById);
journalRouter.get('/getAlljournalsByUserId/:id', getAllJournalsByUserId)
journalRouter.post('/', ...validationHandler(createJournalSchema), createJournal);
