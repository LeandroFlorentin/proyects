import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";
import auth from "../rutas_swagger/auth.js";
import jwt from "../rutas_swagger/jwt.js";
const URL_SECURITY = JSON.parse(process.env.URL_SECURITY || "{}");
const { singup, login } = auth;
const { get_token } = jwt;

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Security Microservice", version: "1.0.0" },
    paths: {
      "/api/security/singup": singup,
      "/api/security/login": login,
      "/api/security/get_token": get_token,
    },
  },
  apis: [`${path.join(_dirname, "../routes/*.ts")}`],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app: any) => {
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Funcionando en ${URL_SECURITY.url}${URL_SECURITY.port}/swagger`);
};

export default swaggerDocs;
