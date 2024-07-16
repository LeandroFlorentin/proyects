import dotenv from "dotenv";
import server from "./src/app.js";

dotenv.config();

const { SECURITY_PORT } = process.env;

server.listen(SECURITY_PORT, () => {
  console.log(`Server listening on port ${SECURITY_PORT}`);
});
