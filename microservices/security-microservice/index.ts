import dotenv from "dotenv";
import server from "./src/app.js";
import swagger from "./src/swagger/swagger.js";

dotenv.config();

const { SECURITY_PORT } = process.env;

server.listen(SECURITY_PORT, () => {
  swagger(server);
  console.log(`Server listening on port ${SECURITY_PORT}`);
});
