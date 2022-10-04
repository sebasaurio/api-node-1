import { Router } from 'express';
import { check } from 'express-validator';
import { Get, Put, Post, Delete, Patch } from '../controllers/user.js';
import { IsAlreadyExistEmail, IsRoleValid, UserExistByEmail } from '../helpers/db-validators.js';
import { validateFields } from '../middlewares/validator.js';

const router = Router();

router.get('/', Get);
router.post(
  '/',
  check('name', 'Email is required').not().isEmpty(),
  check('password', 'Password is required')
    .isLength({ min: 6 })
    .not()
    .isEmpty(),
  check('email').custom(IsAlreadyExistEmail),
  check('role').custom(IsRoleValid),
  validateFields,
  Post
);

router.delete('/:id', [
  check('id', 'is not a valid Id').isMongoId(),
  validateFields
],Delete);
router.patch('/', Patch);
router.put('/:id',[
  check('id', 'is not a valid Id').isMongoId(),
  check('id').custom(UserExistByEmail),
  check('role').custom(IsRoleValid),
  validateFields 
], Put);

export default router;
