import container from 'src/container';
import { get } from 'src/interface/rest/modules/category/controllers';

import expressRequestMock from 'express-request-mock';

describe('Get', () => {
  it('it should get all categories via use cases', async () => {
    const databaseData = [
      {
        'id': 1,
        'latitude': 3,
        'longitude': 1,
        'category': '77',
        'counter': 255,
      },
      {
        'id': 2,
        'latitude': 3,
        'longitude': 1,
        'category': '76',
        'counter': 160,
      },
      {
        'id': 3,
        'latitude': 3,
        'longitude': 1,
        'category': '75',
        'counter': 200,
      },
    ];
    const scope = container.createScope();
    const { FindCategoryUseCase } = scope.cradle;

    const useCaseMock = jest.fn(async () => {
      return Promise.resolve(databaseData);
    });
    FindCategoryUseCase.execute = useCaseMock;
    const { res } = await expressRequestMock(get, {
      body: {
        scope,
      },
    });
    expect(res.statusCode).toBe(200);
  });
});
