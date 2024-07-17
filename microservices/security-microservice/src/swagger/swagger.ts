import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";
import auth from "../rutas_swagger/auth.js";
const URL = JSON.parse(process.env.URL || "{}");
const { singup } = auth;

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Security Microservice", version: "1.0.0" },
    paths: {
      "/api/security/singup": singup,
    },
  },
  apis: [`${path.join(_dirname, "../routes/*.ts")}`],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app: any) => {
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Funcionando en ${URL.url}${URL.port}/swagger`);
};

export default swaggerDocs;
