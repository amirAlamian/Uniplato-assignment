import container from 'src/container';

describe('UpdateCategoryRequest', () => {
  it('it update category via orm', async () => {
    const props = { categoryId: 1, type: 'increase' };

    const req = {
      body: {
        scope: container.createScope(),
      },
    };


    const { CategoryRepository } = req.body.scope.cradle;

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


    CategoryRepository.prisma.category.update = repositoryMock;

    const updatedCategory = await CategoryRepository.update(props);

    expect(updatedCategory).toStrictEqual(databaseData);
  });
});
