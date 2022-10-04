import { response } from 'express';
import bcryptjs from 'bcryptjs';

import User from '../models/user.js';

export const Get = async (req, res = response) => {
  const { q, name, key, limit = 5, skip = 0} = req.query;

  const query = {status : true}

  const [ total ,users] = await Promise.all([
    User.countDocuments(query),
    User.find(query).skip(skip).limit(Number(limit))
  ])

  res.json({
    total,
    users
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

  //crypt password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  //save user
  await user.save();

  res.json({
    user,
  });
};

export const Put = async (req, res = response) => {
  const id = req.params.id;
  const {_id, password, asGoogle, ...otherData}  = req.body

  //validate on db
  if(password){
    const salt = bcryptjs.genSaltSync();
    otherData.password = bcryptjs.hashSync(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, otherData)

  res.json({
    user
  });
};

export const Delete = async (req, res = response) => {
  const id = req.params.id

  //delete fisically
  //const user = User.findByIdAndDelete({id})

  const user = User.findByIdAndUpdate(id, {status: false});

  res.json({
    msg: 'hola',
  });
};

export const Patch = (req, res = response) => {
  res.json({
    msg: 'hola',
  });
};
