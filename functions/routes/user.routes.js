module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Retrieve a single Race with id
  router.get("/:username/:password", users.authenticate);

  // Create a new Race
  router.post("/", users.create);

  app.use("/api/users", router);
};
