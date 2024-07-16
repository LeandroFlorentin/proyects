import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

const errorHandler = (error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  // Implementación de tu manejador de errores
};

export { errorHandler };
