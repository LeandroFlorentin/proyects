import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";
import auth from "../rutas_swagger/auth.js";
import jwt from "../rutas_swagger/jwt.js";
import users from "../rutas_swagger/users.js";
const URL_SECURITY = JSON.parse(process.env.URL_SECURITY || "{}");
const { singup, login } = auth;
const { decoded_token } = jwt;
const { get_usernames } = users;

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Security Microservice", version: "1.0.0" },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    paths: {
      "/api/security/singup": singup,
      "/api/security/login": login,
      "/api/security/decoded_token": decoded_token,
      "/api/security/get_usernames": get_usernames,
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
