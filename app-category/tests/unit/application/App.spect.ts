import container from 'src/container';

describe('App', () => {
  it('it should start the server', async () => {
    const {
      app,
      server,
    } = container.cradle;

    const repositoryMock = jest.fn(async () => {
      return Promise.resolve({ _connectionKey: '6::::3000' });
    });
    server.start = repositoryMock;
    const startedServer = await app.start();
    expect(startedServer).toStrictEqual({ _connectionKey: '6::::3000' });
  });
});
