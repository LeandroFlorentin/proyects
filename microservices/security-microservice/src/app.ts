import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/security", routes);

export default app;
