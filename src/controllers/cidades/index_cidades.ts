import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const index = (_: Request, res: Response) => {
  return res.status(StatusCodes.OK).json({
    message: 'Index cidades!!'
  });
};