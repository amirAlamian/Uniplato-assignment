import express, { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec, swaggerOptions } from 'config/swagger';
import { StatusCodes } from 'src/interface/rest/constants/Statuscodes.enum';
import { categoryRouter } from 'src/interface/rest/modules/category/categoryRouter';
import { errorHandler } from 'src/interface/rest/errors/errorHandler';
import cors from 'cors';


export const router = (container) => () => {
  const apiRouter = Router();

  apiRouter
    .use(cors({
      origin: '*',
    }))
    .use(express.json())
    .use(express.urlencoded({ extended: false }));

  apiRouter.use('/category', categoryRouter(container));

  // swagger json endpoint
  apiRouter.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  // swagger ui endpoint
  apiRouter.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, swaggerOptions),
  );


  apiRouter.use('*', (req, res) => {
    res.status(StatusCodes.NOT_FOUND).send('not found');
  });

  apiRouter.use(errorHandler);

  return apiRouter;
};
