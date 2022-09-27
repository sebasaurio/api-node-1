import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //middlewares

    this.routes();
  }

  middlewares() {
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.get('get');
    });

    this.app.put('/api', (req, res) => {
      res.put('put');
    });

    this.app.post('/api', (req, res) => {
      res.post('post');
    });

    this.app.delete('/api', (req, res) => {
      res.delete('delete');
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Running');
    });
  }
}
