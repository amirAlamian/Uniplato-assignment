import { CategoryRepository } from 'src/infrastructure/db/mysql/repositories/Category.repository';
import { UpdateCategoryRequest, UpdateData } from 'src/domain/category/UpdateCategoryRequest';

export class UpdateCategoryUseCase {
  categoryRepository: CategoryRepository;
  updateCategoryRequest: UpdateCategoryRequest;
  constructor ({ CategoryRepository, UpdateCategoryRequest }) {
    this.categoryRepository = CategoryRepository;
    this.updateCategoryRequest = UpdateCategoryRequest;
  }

  async execute (props: UpdateData) {
    await this.updateCategoryRequest.validate(props);
    return this.categoryRepository.update(props);
  }
}
