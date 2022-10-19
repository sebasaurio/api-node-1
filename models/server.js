import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import user from '../routes/user.js';
import auth from '../routes/auth.js';
import category from '../routes/category.js';

import { dbConnection } from '../database/config';

dotenv.config();

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.usersRoutePath = '/api/users';
    this.authPath = '/api/auth';
    this.categoryPath = '/api/categories';

    this.connectDB();

    //middlewares
    this.middlewares();

    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersRoutePath, user);
    this.app.use(this.authPath, auth);
    this.app.use(this.categoryPath, category);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Running');
    });
  }
}
