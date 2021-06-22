
import express, { Express, Router } from 'express';
import { ConfigType } from 'config';
import morgan from 'morgan';
export class Server {
  express: Express
  config: ConfigType
  router: Router
  constructor ({ config, router }) {
    this.config = config;
    this.express = express();
    this.express.disable('x-powered-by');
    this.express.use(morgan('dev'));
    this.express.use(`${this.config.apiPrefix}`, router);
  }


  start () {
    return new Promise((resolve) => {
      console.log(this.config.port);

      const http = this.express.listen(
        this.config.port,
        () => {
          console.log(
            ` server [p ${process.pid}] is Listening on port ${this.config.port}`,
          );
          resolve(http);
        },
      );
    });
  }
}
