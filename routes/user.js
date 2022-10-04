import { Router } from 'express';
import { check } from 'express-validator';
import { Get, Put, Post, Delete, Patch } from '../controllers/user.js';
import { validateFields } from '../middlewares/validator.js';
import Role from '../models/role.js';

const router = Router();

router.get('/', Get);
router.post(
  '/',
  check('name', 'Email is required').not().isEmpty(),
  check('password', 'Password is required')
    .isLength({ min: 6 })
    .not()
    .isEmpty(),
  check('email', 'Email is not valid').isEmail(),
  check('role').custom(async (role = '') => {
    const existRole = await Role.findOne({ role });
    if (!existRole) {
      throw new Error(`Role ${role} not exist in db`);
    }
  }),
  validateFields,
  Post
);

router.delete('/', Delete);
router.patch('/', Patch);
router.put('/:id', Put);

export default router;
