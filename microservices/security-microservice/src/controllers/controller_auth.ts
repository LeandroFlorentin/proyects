import { NextFunction, Request, Response } from "express";
import { createUser, checkUser } from "../functions/functions_auth.js";
import { IResponseCreateToken, ICreateUser, IBodyLogin } from "../interfaces/interface_auth.js";
import { getGeneral, encryptPassword } from "../helpers/index.js";
const { URL_SECURITY } = process.env;
let url_security = URL_SECURITY || "";
export const singup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let body: ICreateUser = req.body;
    body.password = await encryptPassword(body.password);
    let user_created_with_success = await createUser(body);
    let token_created = await getGeneral<IResponseCreateToken>(url_security, `/api/security/get_token?idusername=${user_created_with_success[0].idusername}`);
    res.header("token", token_created.content.token).status(200).json({
      info: true,
      msg: "Username created successfully",
      content: user_created_with_success[0],
    });
  } catch (error: any) {
    next(error);
  }
};
export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let body: IBodyLogin = req.body;
    body.password = await encryptPassword(body.password);
    let user = await checkUser(body);
    let token_created = await getGeneral<IResponseCreateToken>(url_security, `/api/security/get_token?idusername=${user[0].idusername}`);
    res.header("token", token_created.content.token).status(200).json({
      info: true,
      msg: "Info OK",
      content: user,
    });
  } catch (error: any) {
    next(error);
  }
};
