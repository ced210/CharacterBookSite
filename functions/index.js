
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));

const bodyParser = require("body-parser");

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

require("./routes/race.routes")(app);
require("./routes/class.routes")(app);
require("./routes/user.routes")(app);
const fn = async () => {
  try {
    await db.sequelize.authenticate();
    console.log(
      "\x1b[36m%s\x1b[0m",
      "Connection has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
fn();

// set port, listen for requests
const PORT = process.env.PORT || 8081;

// simple route
app.get("/", cors(), (req, res) => {
  res.json({ message: `Welcome PORT${PORT} ENV:${process.env.NODE_ENV}` });
});


// app.get('/hello-world', (req, res) => {
//   return res.status(200).send('Hello World!');
// });

exports.app = functions.https.onRequest(app);