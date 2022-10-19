import { Router } from 'express';
import { check } from 'express-validator';

import { validateFields } from '../middlewares/validator.js';

const router = Router();

router.get('/', Get);
router.get('/:id', Get);
router.post('/', Post);
router.put('/:id', Put);
router.delete('/:id', Delete);

export default router;
