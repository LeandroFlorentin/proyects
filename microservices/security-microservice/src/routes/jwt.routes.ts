import { Router } from "express";
import { getToken } from "../controllers/controller_jwt.js";
const routeJwt = Router();
routeJwt.get("/get_token", getToken);
export default routeJwt;
