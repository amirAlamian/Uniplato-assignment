import { Request, Response } from 'express';
import { UpdateCategoryUseCase } from 'src/application/category/UpdateCategoryUseCase';
import { StatusCodes } from 'src/interface/rest/constants/Statuscodes.enum';

export const update = async (req: Request, res: Response) => {
  const { scope, ...updateData } = req.body;
  const { UpdateCategoryUseCase }:{ UpdateCategoryUseCase: UpdateCategoryUseCase } = scope.cradle;
  const data = await UpdateCategoryUseCase.execute({ ...updateData, ...req.params });

  return res.status(StatusCodes.SUCCESS).json(
    data,
  );
};
