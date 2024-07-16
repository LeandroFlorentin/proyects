import { Router } from "express";
import authRoutes from "./auth.routes.js";
const routes: Router = Router();
routes.use(authRoutes);
export default routes;
