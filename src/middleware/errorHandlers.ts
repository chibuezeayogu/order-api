import { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import { StatusCodes } from 'http-status-codes';

config();
const nodeEnv = process.env.NODE_ENV;
const { NOT_FOUND, INTERNAL_SERVER_ERROR } = StatusCodes;

export const routeNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const error = new Error(`Route -> '${req.originalUrl}' not found'`);
  res.status(NOT_FOUND);
  next(error);
};

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response, 
): void => {
  if (!res.status) res.status(INTERNAL_SERVER_ERROR);
  res
    .json({
      success: false,
      message: error.message,
      stack: nodeEnv !== 'prodection' ? error.stack : ''
    })
};
