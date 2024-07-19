import db from "../db.js";
import axios from "axios";
export function bodyMassage(body: any) {
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

export async function getGeneral<T>(url: string, path: string): Promise<T> {
  try {
    let url_parse = JSON.parse(url);
    let url_call = url_parse.url + url_parse.port + path;
    let get_data = await axios.get(url_call);
    return get_data.data as T;
  } catch (error: any) {
    console.log("Error in get", error);
    throw error;
  }
}
