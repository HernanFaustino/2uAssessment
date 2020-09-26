import { Router } from 'express'

import {
  createInvoice,
  getInvoices,
  approveInvoice,
  getPendingInvoices,
  deleteInvoice,
} from '../controllers/Invoce.Controller';

const router = Router();

router.post('/', createInvoice);
router.post('/approve/:id', approveInvoice);
router.get('/', getInvoices);
router.get('/pending', getPendingInvoices);
router.delete('/:id', deleteInvoice);

export default router;