import { Request, Response, NextFunction } from "express";
import { getTokenHeaders, isIResponseDecoded } from "../helpers/index.js";
import { IResponseDecoded } from "../interfaces/interface_jwt.js";
import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env;
let secret = JWT_SECRET || "tokentest";
export const getToken = (req: Request, res: Response, next: NextFunction) => {
  const { idusername } = req.query;
  try {
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
export const decodedToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token: string = getTokenHeaders(req);
    let decodedToken = jwt.verify(token, secret);
    if (isIResponseDecoded(decodedToken)) {
      let decoded: IResponseDecoded = decodedToken;
      return res.status(200).json({
        info: true,
        msg: "Token decoded successfully",
        content: {
          idusername: parseInt(decoded.idusername),
        },
      });
    } else {
      throw new Error("Invalid token payload");
    }
  } catch (error: any) {
    next(error);
  }
};
