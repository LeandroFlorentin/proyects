import { ICreateUser, ICreateUserResponse, ICreateUserX, IBodyLogin, IBodyLoginX, IResponseFindUser } from "../interfaces/interface_auth.js";
import { bodyMassage, generalSp } from "../helpers/index.js";
export const createUser = async (body: ICreateUser): Promise<ICreateUserResponse[]> => {
  let xbody = bodyMassage<ICreateUserX>(body);
  let db_call = await generalSp<ICreateUserResponse>("create_username(:xusername,:xemail,:xpassword,:xname,:xlastname,:xphone)", xbody);
  return db_call;
};
export const checkUser = async (body: IBodyLogin): Promise<IResponseFindUser[]> => {
  let xbody = bodyMassage<IBodyLoginX>(body);
  let get_user = await generalSp<IResponseFindUser>("find_user(:xusername,:xpassword)", xbody);
  return get_user;
};
