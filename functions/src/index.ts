import * as functions from 'firebase-functions';
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({ origin: true }));

const bodyParser = require("body-parser");
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//import routes
require("./routes/user.routes")(app);
require("./routes/class.routes")(app);
require("./routes/race.routes")(app);
require("./routes/character.routes")(app);
require("./routes/auth.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;


// simple route
app.get("/", cors(), (req, res) => {
  res.json({ message: `Welcome PORT ${PORT} ENV:${process.env.NODE_ENV}` });
});

// app.get('/hello-world', (req, res) => {
//   return res.status(200).send('Hello World!');
// });

exports.app = functions.https.onRequest(app);
