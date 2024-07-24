import { Request, Response, NextFunction } from "express";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction, type: string) => {
  // Implementación de tu manejador de errores
  switch (type) {
    case "general":
      return handlerGeneral(error, req, res, next);
    default:
      return "";
  }
};
function handlerGeneral(error: any, req: Request, res: Response, next: NextFunction) {
  let status = error?.response?.status || 500;
  res.status(status).json({
    info: false,
    msg: error?.original?.sqlMessage || error.message,
    content: {
      ...error?.original,
    },
  });
}

export { errorHandler };
