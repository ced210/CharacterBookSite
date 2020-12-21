module.exports = app => {
  const users = require("../controllers/user.controller");

  var router = require("express").Router();

  // Retrieve a single Race with id
  router.get("/:username/:password", users.authenticate);

  // Create a new Race
  router.post("/", users.create);

  app.use("/api/user", router);
};
