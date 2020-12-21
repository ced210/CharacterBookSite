import * as functions from 'firebase-functions';
const express = require("express");
const cors = require("cors");
const app = express();

//import routes
require("./routes/class.routes")(app);
require("./routes/user.routes")(app);
require("./routes/race.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.use(cors({ origin: true }));

// simple route
app.get("/", cors(), (req, res) => {
  res.json({ message: `Welcome PORT${PORT} ENV:${process.env.NODE_ENV}` });
});

// app.get('/hello-world', (req, res) => {
//   return res.status(200).send('Hello World!');
// });

exports.app = functions.https.onRequest(app);
