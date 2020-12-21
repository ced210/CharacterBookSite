module.exports = app => {
  const characters = require("../controllers/character.controller");
  var router = require("express").Router();
  // Create a new Race
  router.post("/", characters.save);

  router.get("/:userId", characters.getAllFullByUserId);

  app.use("/api/characters", router);
};
