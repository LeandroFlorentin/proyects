import { Router } from "express";
import authRoutes from "./auth.routes.js";
import jwtRoutes from "./jwt.routes.js";
import usersRoutes from "./users.routes.js";
const routes: Router = Router();
routes.use(authRoutes);
routes.use(jwtRoutes);
routes.use(usersRoutes);
export default routes;
