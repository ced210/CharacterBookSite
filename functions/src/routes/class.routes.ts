module.exports = app => {
  const races = require("../controllers/class.controller");

  var router = require("express").Router();

  // Retrieve all Races
  router.get("/", races.findAll);

  // Retrieve a single Race with id
  router.get("/:id", races.findOne);

  app.use("/api/classes", router);
};
