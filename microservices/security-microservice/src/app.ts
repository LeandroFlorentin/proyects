import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/security", routes);
app.use("/", (err: any, req: Request, res: Response, next: NextFunction) => errorHandler(err, req, res, next, "general"));

export default app;
