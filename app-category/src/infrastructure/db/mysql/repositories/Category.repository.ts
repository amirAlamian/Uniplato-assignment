import { PrismaClient } from '@prisma/client';
import { UpdateData, TypeEnum } from 'src/domain/category/UpdateCategoryRequest';

export class CategoryRepository {
  prisma: PrismaClient
  constructor () {
    this.prisma = new PrismaClient();
  }
  update (props: UpdateData) {
    const query = {
      where: { id: props.categoryId },
      data: {
        counter: {
          increment: props.type === TypeEnum.INCREASE ? 1 : -1,
        },
      },
    };


    return this.prisma.category.update(query);
  }
}
