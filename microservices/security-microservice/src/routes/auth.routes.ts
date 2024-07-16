import { Router } from "express";
import { singup } from "../controllers/controller_auth.js";
const authRoutes: Router = Router();
authRoutes.use("/singup", singup);
export default authRoutes;
