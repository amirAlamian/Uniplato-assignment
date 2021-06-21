import { Router } from 'express';
import { castStringToNumber } from 'src/interface/rest/middlewares/castStringToNumber.middleware';
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

  return router;
};
