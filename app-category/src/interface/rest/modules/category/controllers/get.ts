import { Request, Response } from 'express';
import { FindCategoryUseCase } from 'src/application/category/FindCategoryUseCase';
import { StatusCodes } from 'src/interface/rest/constants/Statuscodes.enum';

export const get = async (req: Request, res: Response) => {
  const { scope } = req.body;
  const { FindCategoryUseCase }:{ FindCategoryUseCase: FindCategoryUseCase } = scope.cradle;// get an instance of use case

  const data = await FindCategoryUseCase.execute();

  return res.status(StatusCodes.SUCCESS).json(
    data,
  );
};
