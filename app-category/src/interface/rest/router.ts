import express, { Router } from 'express';
import { StatusCodes } from 'src/interface/rest/constants/Statuscodes.enum';
import { categoryRouter } from 'src/interface/rest/modules/category/categoryRouter';
import { errorHandler } from 'src/interface/rest/errors/errorHandler';
import cors from 'cors';


export const router = (container) => () => {
  const apiRouter = Router();

  apiRouter
    .use(cors({
      origin: '*', // allow origins for all requests
    }))
    .use(express.json())
    .use(express.urlencoded({ extended: false }));

  apiRouter.use('/category', categoryRouter(container)); // category router


  apiRouter.use('*', (req, res) => {
    res.status(StatusCodes.NOT_FOUND).send('not found');
  });

  apiRouter.use(errorHandler); // every error will catch in this middleware

  return apiRouter;
};
