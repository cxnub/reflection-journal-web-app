import express from 'express';
import { getJournalById, createJournal } from './controllers';
import { checkSchema } from 'express-validator';
import { createJournalSchema } from '../../models/journal';

const journalRouter = express.Router();

journalRouter.get('/:id', getJournalById);
journalRouter.post('/', checkSchema(createJournalSchema, ['body']), createJournal);

export default journalRouter;
