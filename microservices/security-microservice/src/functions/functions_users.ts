import { generalSp, bodyMassage } from "../helpers/index.js";
import { IgetUsernamesResponse, IBodyGetUsernames, IxBodyGetUsernames } from "../interfaces/interface_users.js";
export const get_usernames_db = async (body: IBodyGetUsernames) => {
  let xbody: IxBodyGetUsernames = bodyMassage(body);
  console.log("XBODYYY", xbody);
  let db_call = await generalSp<IgetUsernamesResponse>("get_usernames(:xidusername)", xbody);
  return db_call;
};
