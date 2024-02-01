import { Router } from 'express';
const router = Router();

import { getAllProcs, getProc, createProc, updateProc, deleteProc } from '../controllers/procController.js';

import {
  validateProcInput,
  validateIdParam,
} from '../middleware/validationMiddleware.js';
import { checkForTestUser } from '../middleware/authMiddleware.js';

router
  .route('/')
  .get(getAllProcs)
  .post(checkForTestUser, validateProcInput, createProc);

// router.route('/stats').get(showStats);

router
  .route('/:id')
  .get(validateIdParam, getProc)
  .patch(checkForTestUser, validateProcInput, validateIdParam, updateProc)
  .delete(checkForTestUser, validateIdParam, deleteProc);

export default router;