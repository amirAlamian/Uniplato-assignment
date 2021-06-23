import { Request, Response } from 'express';

export const scopeCreator = (container) => (req: Request, res: Response, next) => { // create an instance of the container with scope life time
  req.body.scope = container.createScope();
  next();
};
