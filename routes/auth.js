import { Router } from 'express';
import { check } from 'express-validator';
import { login } from '../controllers/auth';
import { validateJWT } from '../middlewares/validate-jwt';
import { validateFields } from '../middlewares/validator';

const router = Router()

router.post('/login',[
    validateJWT,
    check('email','email is required').isEmail(),
    check('password', 'password is required').not().isEmpty(),
    validateFields
], login)

export default router;