import { response } from 'express';
import bcryptjs from 'bcryptjs';
import User from '../models/user';
import { generateJWT } from '../helpers/generate-jwt';
import { verify } from '../helpers/google-verify';

export const login = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    //verify email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not exist' });
    }
    //verify user
    if (!user.status) {
      return res.status(400).json({ message: 'User is disabled' });
    }
    //verify password
    if (!bcryptjs.compareSync(password, user.password)) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    //generate jwt
    const token = await generateJWT(user.id);
    console.log(token);
    return res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error on login',
    });
  }
};

export const googleSignIn = async (req, res = response) => {
  try {
    const { id_token } = req.body;
    const googleUser = await verify(id_token);
    console.log(googleUser);
  } catch (error) {
    return res.status(400).json({
      message: 'Error on login with google sign in',
    });
  }

  res.json({
    message: 'Ok',
  });
};
