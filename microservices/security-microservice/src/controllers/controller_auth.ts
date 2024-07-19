import { NextFunction, Request, Response } from "express";
import { createUser } from "../functions/functions_auth.js";
import { ResponseCreateToken } from "../interfaces/interface_auth.js";
import { getGeneral } from "../helpers/index.js";
const { URL_SECURITY } = process.env;
export const singup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let url_security = URL_SECURITY || "";
    let user_created_with_success = await createUser(req.body);
    let token_created = await getGeneral<ResponseCreateToken>(url_security, `/api/security/get_token?idusername=${user_created_with_success[0].idusername}`);
    res.status(200).json({
      info: true,
      msg: user_created_with_success[0].msg,
      token: token_created.content.token,
    });
  } catch (error: any) {
    next(error);
  }
};
