import { response } from 'express';

export const Get = (req, res = response) => {
  res.json({
    msg: 'hola',
  });
};

export const Post = (req, res = response) => {
  const body = req.body;
  res.json(body);
};

export const Put = (req, res = response) => {
  res.json({
    msg: 'hola',
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
