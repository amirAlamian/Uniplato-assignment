import { Request, Response } from 'express';

export const scopeCreator = (container) => (req: Request, res: Response, next) => {
  req.body.scope = container.createScope();
  next();
};
