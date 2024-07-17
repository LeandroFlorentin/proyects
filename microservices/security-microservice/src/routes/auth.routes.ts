import { Router } from "express";
import { singup } from "../controllers/controller_auth.js";
const authRoutes: Router = Router();
authRoutes.post("/singup", singup);
export default authRoutes;
