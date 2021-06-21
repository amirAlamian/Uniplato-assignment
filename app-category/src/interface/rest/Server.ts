
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

    // this.express.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
    this.express.use(`${this.config.apiPrefix}`, router);


    // process.on('SIGTERM', this.shutDown);
    // process.on('SIGINT', this.shutDown);
  }

  // shutDown () {
  //   this.http.close(() => process.exit(0)); // shutdown server safely
  //   process.exit(1);
  //   setTimeout(() => process.exit(1), 10000); // force server to shutdown after 5 seconds
  // }

  start () {
    // process.on(
    //   'unhandledRejection',
    //   function (reason, promise) {
    //     // :FIXME
    //     this.logger.error(reason);
    //     this.logger.error(promise);
    //     process.exit(1);
    //   }.bind(this),
    // );
    return new Promise((resolve) => {
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


  // close () {
  //   this.shutDown();
  // }
}
