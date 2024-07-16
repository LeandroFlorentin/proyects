import { Sequelize } from "sequelize";

const { DATABASE, USERNAME, PASSWORD, HOST } = process.env;

const db = new Sequelize(`${DATABASE}`, `${USERNAME}`, `${PASSWORD}`, {
  host: `${HOST}`,
  dialect: "mysql",
});

export default db;
