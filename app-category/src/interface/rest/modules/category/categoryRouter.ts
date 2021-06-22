import { Router } from 'express';
import { scopeCreator } from 'src/interface/rest/middlewares/scopeCreator.middleware';
import { update } from 'src/interface/rest/modules/category/controllers';

export const categoryRouter = (container) => {
  /**
     * @swagger
     * components:
     *   schemas:
     *       position:
     *           type: object
     *           properties:
     *               _id:
     *                   type: integer
     *                   format: int64
     *               title:
     *                   type: string
     *               categoryId:
     *                   type: integer
     *               publishDate:
     *                    type: date
     *           required:
     *               - _id
     *               - title
     *               - categoryId
     *
     */

  const router = Router();

  /**
     * @swagger
     *
     *   /category/{categoryId}:
     *      patch:
     *         tags: ['Category']
     *         summery: update category 
     *         description: increase or decrease category counter
     *         parameters:
     *           - in: path
     *             name : categoryId
     *             schema:
     *                  type: number
     *                  minimum: 1
     *             description: The category id
     *         responses:
     *           200:
     *             description: Item is ready.
     *           400:
     *             description: Request failed.
     *           404:
     *             description: Resource not found.
     */
  router.patch('/:categoryId', scopeCreator(container), update);


  return router;
};
