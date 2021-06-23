import { Router } from 'express';
import { scopeCreator } from 'src/interface/rest/middlewares/scopeCreator.middleware';
import { update, get } from 'src/interface/rest/modules/category/controllers';

export const categoryRouter = (container) => {

  const router = Router();

  router.patch('/:categoryId', scopeCreator(container), update); // update category

  router.get('/', scopeCreator(container), get);

  return router;
};
