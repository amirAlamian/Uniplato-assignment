import container from 'src/container';

describe('CategoryRepository', () => {
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


  it('it get all categories via orm', async () => {
    const req = {
      body: {
        scope: container.createScope(),
      },
    };


    const { CategoryRepository } = req.body.scope.cradle;
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


    CategoryRepository.prisma.category.findMany = repositoryMock;

    const updatedCategory = await CategoryRepository.findAllCategory();

    expect(updatedCategory).toStrictEqual(databaseData);
  });
});
