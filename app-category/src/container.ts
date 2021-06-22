import {
  createContainer,
  asFunction,
  asClass,
  asValue,
} from 'awilix';

const container = createContainer();
import { App } from 'src/application/App';
import { Server } from 'src/interface/rest/Server';
import { config } from 'config';
import { router } from 'src/interface/rest/router';
import { UpdateCategoryUseCase } from 'src/application/category/UpdateCategoryUseCase';
import { CategoryRepository } from 'src/infrastructure/db/mysql/repositories/Category.repository';
import { UpdateCategoryRequest } from 'src/domain/category/UpdateCategoryRequest';
container.register({
  app: asClass(App).singleton(),
  server: asClass(Server).singleton(),
  config: asValue(config),
  router: asFunction(router(container)).singleton(),
  UpdateCategoryUseCase: asClass(UpdateCategoryUseCase).scoped(),
  UpdateCategoryRequest: asClass(UpdateCategoryRequest).scoped(),
  CategoryRepository: asClass(CategoryRepository).singleton(),
});


export default container;
