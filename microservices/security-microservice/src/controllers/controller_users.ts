import { NextFunction, Request, Response } from "express";
import { getTokenHeaders, getGeneral } from "../helpers/index.js";
import { IgetDecodedToken, IQueryUsernames, ICustomHeaders } from "../interfaces/interface_users.js";
import { get_usernames_db } from "../functions/functions_users.js";
const { URL_SECURITY } = process.env;
const URL_SECURITY_EXIST = URL_SECURITY || "";

export const get_usernames = async (req: Request<{}, {}, {}, IQueryUsernames, ICustomHeaders>, res: Response, next: NextFunction) => {
  try {
    let token: string = getTokenHeaders(req);
    let query_body = {
      idusername: parseInt(req.query.idusername),
    };
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const decodedToken = await getGeneral<IgetDecodedToken>(URL_SECURITY_EXIST, "/api/security/decoded_token", config);
    const usernames = await get_usernames_db(query_body);
    return res.status(200).json({
      info: true,
      msg: "Info OK",
      content: usernames,
    });
  } catch (error: any) {
    next(error);
  }
};
