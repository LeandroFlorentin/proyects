import { Router } from "express";
import { getToken, decodedToken } from "../controllers/controller_jwt.js";
const routeJwt = Router();
routeJwt.get("/get_token", getToken);
routeJwt.get("/decoded_token", decodedToken);
export default routeJwt;
