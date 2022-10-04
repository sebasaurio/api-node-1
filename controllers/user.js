import { response } from 'express';
import bcryptjs from 'bcryptjs';

import User from '../models/user.js';

export const Get = (req, res = response) => {
  const { q, name, key } = req.query;

  res.json({
    msg: 'hola',
  });
};

export const Post = async (req, res = response) => {
  const { name, email, password, role } = req.body;
  const user = new User({
    name,
    email,
    password,
    role,
  });

  //verify email
  const alreadyExist = await User.findOne({ email });
  if (alreadyExist) {
    return res.status(400).json({
      message: 'User already exist',
    });
  }

  //crypt password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  //save user

  user.save();

  res.json({
    user,
  });
};

export const Put = (req, res = response) => {
  const id = req.params.id;

  res.json({
    msg: 'hola',
    id,
  });
};

export const Delete = (req, res = response) => {
  res.json({
    msg: 'hola',
  });
};

export const Patch = (req, res = response) => {
  res.json({
    msg: 'hola',
  });
};
