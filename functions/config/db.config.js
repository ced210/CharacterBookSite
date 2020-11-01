process.env.NODE_ENV = process.env.NODE_ENV || "developpement";

let HOST = "localhost";
let USER = "root";
let PASSWORD = "!Book!17";
let DB = "characterbook";
// if (process.env.NODE_ENV === "test") {
//   return;
// } else
if (process.env.NODE_ENV === "production") {
  HOST = "SG-characterbook-38678.servers.mongodirector.com";
  USER = "CedPC";
  DB = "characterbook";
  PASSWORD = "AAnubis210!";
} else if (process.env.NODE_ENV === "developpement") {
  HOST = "localhost";
  USER = "root";
}
module.exports = {
  HOST: HOST,
  USER: USER,
  PASSWORD: PASSWORD,
  DB: DB,
  dialect: "mysql",
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
