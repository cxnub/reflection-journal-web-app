import express from 'express';
import { getJournalById, createJournal, getAllJournalsByUserId, deleteJournal, updateJournal } from './controllers';
import { validationHandler } from '../../middleware/validation-handler';
import { createJournalSchema, updateJournalSchema } from './schemas';

export const journalRouter = express.Router();

journalRouter.get('/getJournalById/:id', getJournalById);
journalRouter.get('/getAllJournalsByUserId', getAllJournalsByUserId)
journalRouter.post('/', ...validationHandler(createJournalSchema), createJournal);
journalRouter.put('/:id', ...validationHandler(updateJournalSchema), updateJournal);
journalRouter.delete('/:id', deleteJournal);
