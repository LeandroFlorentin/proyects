import { CreateUser, CreateUserResponse } from "../interfaces/interface_auth.js";
import { bodyMassage, generalSp } from "../helpers/index.js";
export const createUser = async (body: CreateUser) => {
  let xbody = bodyMassage(body);
  let db_call = await generalSp<CreateUserResponse>("create_username(:xusername,:xemail,:xpassword,:xname,:xlastname,:xphone)", xbody);
  return db_call;
};
