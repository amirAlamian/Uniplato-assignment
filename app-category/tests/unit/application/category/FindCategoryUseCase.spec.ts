import container from 'src/container';

describe('FindCategoryUseCase', () => {
  it('it should get all categories', async () => {
    const req = {
      body: {
        scope: container.createScope(),
      },
    };
    const {
      FindCategoryUseCase,
      CategoryRepository,
    } = req.body.scope.cradle;
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
    const repositoryMock = jest.fn(async () => {
      return Promise.resolve(databaseData);
    });

    CategoryRepository.findAllCategory = repositoryMock;

    const categories = await FindCategoryUseCase.execute();
    expect(categories).toStrictEqual(databaseData);
  });
});
