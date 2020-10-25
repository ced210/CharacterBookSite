/* eslint-disable handle-callback-err */
const db = require("../models");
const Characters = db.character;
const Op = db.Sequelize.Op;

// // Create and Save a new character
exports.create = (req, res) => {
  // Create a Character
  const character = {
    name: req.body.name,
    raceId: req.body.raceId,
    classId: req.body.classId,
    alignementId: req.body.alignementId
  };

  // Save Character in the database
  // Characters.create(character);
  Characters.create(character)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Character.",
      });
    });
};
