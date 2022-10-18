import { Router } from 'express';
import { check } from 'express-validator';
import { login, googleSignIn } from '../controllers/auth';
import { validateFields } from '../middlewares/validator';

const router = Router();

router.post(
  '/login',
  [
    check('email', 'email is required').isEmail(),
    check('password', 'password is required').not().isEmpty(),
    validateFields,
  ],
  login
);

router.post(
  '/google',
  [check('id_token', 'token is needed').not().isEmpty()],
  googleSignIn
);

export default router;
