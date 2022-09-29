import { Router } from 'express';
import { Get, Put, Post, Delete, Patch } from '../controllers/user.js';

const router = Router();

router.get('/', Get);

router.put('/:id', Put);

router.post('/', Post);

router.delete('/', Delete);

router.patch('/', Patch);

export default router;
