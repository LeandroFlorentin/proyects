import db from "../db.js";
import axios from "axios";
import md5 from "md5";
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import { IResponseDecoded } from "../interfaces/interface_jwt.js";
export function bodyMassage<R>(body: any): R {
  return Object.entries(body).reduce((acc: any, next: any) => {
    acc[`x${next[0]}`] = next[1];
    return acc;
  }, {});
}

export async function generalSp<T>(sp: string, body: Object): Promise<T[]> {
  try {
    let result = await db.query(`call ${sp}`, { replacements: { ...body }, raw: true });
    if (Array.isArray(result)) return result as T[];
    else throw new Error("Unexpected result type from database call");
  } catch (error) {
    console.error("Error executing stored procedure:", error);
    throw error;
  }
}

export async function getGeneral<R>(url: string, path: string): Promise<R> {
  try {
    let url_parse = JSON.parse(url);
    let url_call = url_parse.url + url_parse.port + path;
    let get_data = await axios.get(url_call);
    return get_data.data as R;
  } catch (error: any) {
    console.log("Error in get", error);
    throw error;
  }
}

export async function encryptPassword(password: string): Promise<string> {
  return md5(password);
}

export const getTokenHeaders = (req: Request): string => {
  const authHeader = req.headers["authorization"];
  let token: string;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.slice(7);
  } else token = "";
  return token;
};

export function isIResponseDecoded(decoded: string | JwtPayload): decoded is IResponseDecoded {
  return (decoded as IResponseDecoded).idusername !== undefined;
}
