import { Router } from "express";
import { singup, login } from "../controllers/controller_auth.js";
const authRoutes: Router = Router();
authRoutes.post("/singup", singup);
authRoutes.post("/login", login);
export default authRoutes;
