module.exports = app => {
  const characters = require("../controllers/character.controller.js");

  var router = require("express").Router();

  // Create a new Race
  router.post("/", characters.create);

  router.get("/:userId", characters.fetchByUserId);

  app.use("/api/characters", router);
};
