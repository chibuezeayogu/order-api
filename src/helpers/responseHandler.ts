import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const { NOT_FOUND, OK, CREATED, UNPROCESSABLE_ENTITY } = StatusCodes;

export const resourceCreated = (res: Response, order: FirebaseFirestore.DocumentData ): void => {
  res
    .status(CREATED)
    .json({
      success: true,
      message: `Order created successfully`,
      data: order
    })
}

export const resourceNotFound = (res: Response, orderId: string): void => {
  res
    .status(NOT_FOUND)
    .json({
      success: false,
      message: `Order with Id=${orderId} not found`
    })
}

export const resourceSuccess = (
  res: Response,
  orders: FirebaseFirestore.DocumentData | undefined,
  message?: string
): void => {
  res
    .status(OK)
    .json({
      success: true,
      message: message !== 'undefined' ? message : '',
      data: orders
    })
}

export const validationError = (res: Response, error: unknown): void => {
  res
    .status(UNPROCESSABLE_ENTITY)
    .json({
      success: false,
      message: error
    })
}
