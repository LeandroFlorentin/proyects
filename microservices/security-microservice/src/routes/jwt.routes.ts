import { NextFunction, Router, Request, Response } from "express";
import { getToken, decodedToken } from "../controllers/controller_jwt.js";
import { errorHandler } from "../middlewares/errorHandler.js";
const routeJwt = Router();
routeJwt.get("/get_token", getToken);
routeJwt.get("/decoded_token", decodedToken);
routeJwt.use("/", (error: any, req: Request, res: Response, next: NextFunction) => errorHandler(error, req, res, next, "jwt"));
export default routeJwt;
