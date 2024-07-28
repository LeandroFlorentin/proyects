import { Request, Response, NextFunction } from "express";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction, type: string) => {
  // Implementación de tu manejador de errores
  switch (type) {
    case "jwt":
      return handlerJwt(error, req, res, next);
    default:
      return handlerGeneral(error, req, res, next);
  }
};
function handlerJwt(error: any, req: Request, res: Response, next: NextFunction) {
  return res.status(401).json({
    info: false,
    msg: "Invalid token.",
    content: error,
  });
}
function handlerGeneral(error: any, req: Request, res: Response, next: NextFunction) {
  let status = error?.response?.status || 500;
  console.log(error?.original);
  res.status(status).json({
    info: false,
    msg: error?.original?.sqlMessage || error.message,
    content: {
      sqlStatus: error?.original?.errno,
      sqlCode: error?.original?.code,
      sqlCall: error?.original?.sql,
    },
  });
}

export { errorHandler };
