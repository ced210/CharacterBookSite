module.exports = app => {
  const races = require("../controllers/race.controller");

  var router = require("express").Router();

  // Retrieve all Races
  router.get("/", races.getAll);

  // Retrieve a single Race with id
  router.get("/:id", races.findOne);

  app.use("/api/races", router);
};
