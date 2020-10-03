process.env.NODE_ENV = process.env.NODE_ENV || "dev";

let HOST = "localhost";
let USER = "root";
if (process.env.NODE_ENV === "test") {
} else if (process.env.NODE_ENV === "prod") {
  HOST = "characterbook.mysql.database.azure.com";
  USER = "admin210@characterbook";
} else if (process.env.NODE_ENV === "dev") {
  HOST = "localhost";
  USER = "root";
}
module.exports = {
  HOST: HOST,
  USER: USER,
  PASSWORD: "!Book!17",
  DB: "characterbook",
  dialect: "mysql",
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
