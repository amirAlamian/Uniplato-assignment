import { Server } from 'src/interface/rest/Server';

export class App {
  server: Server
  constructor ({ server }: {server: Server}) {
    this.server = server;
  }

  start () {
    return this.server.start();
  }
}
