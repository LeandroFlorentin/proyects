import { Router } from "express";
import authRoutes from "./auth.routes.js";
import jwtRoutes from "./jwt.routes.js";
const routes: Router = Router();
routes.use(authRoutes);
routes.use(jwtRoutes);
export default routes;
