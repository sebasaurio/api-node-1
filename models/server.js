import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import user from '../routes/user.js';
import { dbConnection } from '../database/config';

dotenv.config();

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.usersRoutePath = '/api/users';

    this.connectDB();

    //middlewares
    this.middlewares();

    this.routes();
  }

  async connectDB(){
    await dbConnection()
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.usersRoutePath, user);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Running');
    });
  }
}
