import container from 'src/container';


describe('Server', () => {
  it('it should start the server', async () => {
    const { server } = container.cradle;
    server.express.listen = jest.fn(async (port : number) => {
      return Promise.resolve(port);
    });
    server.config.port = 3000;
    const http = await server.start();
    console.log(http);
  });
});
