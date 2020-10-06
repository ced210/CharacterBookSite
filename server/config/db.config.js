process.env.NODE_ENV = process.env.NODE_ENV || "developpement";

let HOST = "localhost";
let USER = "root";
let PASSWORD = "!Book!17";
if (process.env.NODE_ENV === "test") {
} else if (process.env.NODE_ENV === "production") {
  HOST = "characterbook.mysql.database.azure.com";
  USER = "admin210@characterbook";
  PASSWORD = "!Book!17";
} else if (process.env.NODE_ENV === "developpement") {
  HOST = "localhost";
  USER = "root";
}
module.exports = {
  HOST: HOST,
  USER: USER,
  PASSWORD: PASSWORD,
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
