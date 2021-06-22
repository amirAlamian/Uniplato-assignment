import container from 'src/container';

describe('UpdateCategoryUseCase', () => {
  it('it should update a category by id', async () => {
    const props = { categoryId: 1, type: 'increase' };

    const req = {
      body: {
        scope: container.createScope(),
      },
    };
    const {
      UpdateCategoryUseCase,
      CategoryRepository,
      UpdateCategoryRequest,
    } = req.body.scope.cradle;
    const databaseData = {
      id: 1,
      latitude: 3,
      longitude: 1,
      category: '77',
      counter: 255,
    };
    const repositoryMock = jest.fn(async () => {
      return Promise.resolve(databaseData);
    });

    const requestMock = jest.fn(async () => {
      return Promise.resolve(true);
    });
    CategoryRepository.update = repositoryMock;
    UpdateCategoryRequest.validate = requestMock;

    const category = await UpdateCategoryUseCase.execute(props);
    expect(category).toStrictEqual(databaseData);
  });
});
