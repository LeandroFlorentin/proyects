import { NextFunction, Request, Response } from "express";
import { createUser } from "../functions/functions_auth.js";
export const singup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let userCreado = await createUser(req.body);
    res.status(200).json(userCreado);
  } catch (error: any) {
    next(error);
  }
};
