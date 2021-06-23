import { CategoryRepository } from 'src/infrastructure/db/mysql/repositories/Category.repository';

export class FindCategoryUseCase {
  categoryRepository: CategoryRepository;
  constructor ({ CategoryRepository }) {
    this.categoryRepository = CategoryRepository;
  }

  async execute () {
    return this.categoryRepository.findAllCategory();
  }
}
