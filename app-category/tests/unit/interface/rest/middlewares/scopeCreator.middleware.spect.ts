import { scopeCreator } from 'src/interface/rest/middlewares/scopeCreator.middleware';
import container from 'src/container';
import expressRequestMock from 'express-request-mock';


describe('scopeCreator', () => {
  it('it should create scope of a container', async () => {
    const { req } = await expressRequestMock(scopeCreator(container));
    expect(req.body).toHaveProperty('scope');
  });
});
