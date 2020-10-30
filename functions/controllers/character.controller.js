/* eslint-disable handle-callback-err */
const db = require("../models");
const Characters = db.character;
const Op = db.Sequelize.Op;

raceController = require("./race.controller");

// // Create and Save a new character
exports.create = (req, res) => {
  // Create a Character
  const character = {
    userId: req.body.userId,
    name: req.body.name,
    raceId: req.body.raceId,
    classId: req.body.classId,
    alignementId: req.body.alignementId
  };

  // Save Character in the database
  // Characters.create(character);
  Characters.create(character)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Character."
      });
    });
};

class Character {
  name = null;
  raceId = null;
  raceName = null;
  classId = null;
  className = null;
  constructor(name, raceId, classId) {
    this.name = name;
    this.raceId = raceId;
    this.classId = classId;
  }

  buildAsync = async () => {
    await raceController
      .findOneValue(data.raceId)
      .then(race => (this.race = race))
      .catch(() => {});
    return this;
  };
}

// Find a single User with an username and password
exports.fetchByUserId = async (req, res) => {
  Characters.findAll({
    where: { userId: req.params.userId }
  })
    .then(async data => {
      const characters = data.map(async character => {
        // eslint-disable-next-line promise/no-nesting
        const race = await raceController.findOneValue(character.raceId);
        // const c = new Character(
        //   character.name,
        //   character.raceId,
        //   character.classId
        // );
        const c = {
          name: character.name,
          race: race
        };
        return c;
      });
      return res.send(await Promise.all(characters));
    })
    // .then(c => res.send('test'))
    // eslint-disable-next-line handle-callback-err
    .catch(err =>
      res.status(500).send({
        message: `Error retrieving Characters ||${error.message}`
      })
    );
};
