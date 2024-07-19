import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env;
export const getToken = (req: Request, res: Response, next: NextFunction) => {
  const { idusername } = req.query;
  try {
    let secret = JWT_SECRET || "tokentest";
    const token: string = jwt.sign({ idusername }, secret);
    res.status(200).json({
      info: true,
      msg: "Token created with successfully",
      content: {
        token: token,
      },
    });
  } catch (error: any) {
    next(error);
  }
};
