module.exports = (app) => {
  const races = require("../controllers/class.controller.js");

  var router = require("express").Router();

  // Create a new Race
  router.post("/", races.create);

  // Retrieve all Races
  router.get("/", races.findAll);

  // Retrieve a single Race with id
  router.get("/:id", races.findOne);

  // Update a Race with id
  router.put("/:id", races.update);

  // Delete a Race with id
  router.delete("/:id", races.delete);

  // // Delete all Races
  // router.delete("/", races.deleteAll);

  app.use("/api/classes", router);
};
