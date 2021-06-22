import container from 'src/container';
import { update } from 'src/interface/rest/modules/category/controllers';

import expressRequestMock from 'express-request-mock';

describe('Update', () => {
  it('it should update via use cases', async () => {
    const databaseData = {
      id: 1,
      latitude: 3,
      longitude: 1,
      category: '77',
      counter: 255,
    };
    const scope = container.createScope();
    const { UpdateCategoryUseCase } = scope.cradle;

    const useCaseMock = jest.fn(async () => {
      return Promise.resolve(databaseData);
    });
    UpdateCategoryUseCase.execute = useCaseMock;
    const { res } = await expressRequestMock(update, {
      body: {
        scope,
        type: 'increase',
      },
      params: {
        categoryId: 1,
      },
    });
    expect(res.statusCode).toBe(200);
  });
});
