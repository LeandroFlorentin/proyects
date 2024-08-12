import { Router } from "express";
import { get_usernames } from "../controllers/controller_users.js";
const route_users = Router();
route_users.get("/get_usernames", get_usernames);
export default route_users;
