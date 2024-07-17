import db from "../db.js";
export function bodyMassage(body: any) {
  return Object.entries(body).reduce((acc: any, next: any) => {
    acc[`x${next[0]}`] = next[1];
    return acc;
  }, {});
}

export async function generalSp(sp: string, body: Object) {
  return await db.query(`call ${sp}`, { replacements: { ...body }, raw: true });
}
