module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Retrieve a single Race with id
  router.get("/:username/:password", users.authenticate);

  app.use("/api/users", router);
};
