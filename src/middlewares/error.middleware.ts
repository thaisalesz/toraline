import { Request, Response, NextFunction } from 'express' 
import { AppError } from '../errors';

export const errorMiddleware = (err: any, request: Request, response: Response, _: NextFunction) => {
        
    if (err instanceof AppError) {
    return response.status(err.statusCode).json({
        status: "Error",
        code: err.statusCode,
        message: err.message,
    });
    }
    
    console.error(err);
    
    return response.status(500).json({
        status: "Error",
        code: 500,
        message: "Internal server error",
    });
}