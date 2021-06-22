import container from 'src/container';

describe('UpdateCategoryRequest', () => {
  it('it should validate id and type', async () => {
    const props = { categoryId: 1, type: 'increase' };

    const req = {
      body: {
        scope: container.createScope(),
      },
    };
    const { UpdateCategoryRequest } = req.body.scope.cradle;

    const validateDataForIncrease = await UpdateCategoryRequest.validate(props);
    expect(validateDataForIncrease).toBeTruthy();

    const validateDataForDecrease = await UpdateCategoryRequest.validate({
      ...props,
      type: 'decrease',
    }); // change type tp decease
    expect(validateDataForDecrease).toBeTruthy();
  });

  it('it throw and error because of wrong credential', async () => {
    const props = { categoryId: null, type: 'SomeRandomString' };

    const req = {
      body: {
        scope: container.createScope(),
      },
    };

    const { UpdateCategoryRequest } = req.body.scope.cradle;

    await UpdateCategoryRequest.validate(props).catch((err) => {
      expect(err).toStrictEqual([
        {
          instancePath: '/type',
          schemaPath: '#/properties/type/enum',
          keyword: 'enum',
          params: { allowedValues: [ 'increase', 'decrease' ] },
        },
        {
          instancePath: '/categoryId',
          schemaPath: '#/properties/categoryId/type',
          keyword: 'type',
          params: { type: 'number' },
        },
      ]);
    });
  });
});
