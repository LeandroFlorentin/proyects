import dotenv from "dotenv";
import server from "./src/app.js";
import swagger from "./src/swagger/swagger.js";
dotenv.config();
const URL_SECURITY = JSON.parse(process.env.URL_SECURITY || "{}");

server.listen(URL_SECURITY.port, () => {
  swagger(server);
  console.log(`Server listening on port ${URL_SECURITY.port}`);
});
