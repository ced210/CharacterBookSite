const characterServices = require('../services/character.services');
import { Character } from "../entity/Character";

exports.save = async (req, res) => {
  const newCharacter = new Character();
  newCharacter.userId = req.body.userId;
  newCharacter.name = req.body.name;
  newCharacter.raceId = req.body.raceId;
  newCharacter.classId = req.body.classId;
  newCharacter.alignementId = req.body.alignementId;
  newCharacter.isGenderMale = req.body.isGenderMale;
  newCharacter.age = req.body.age;
  return await characterServices.save(newCharacter)
  .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Character."
      });
    });
};

exports.getAllFullByUserId = async (req, res) => {
  const userId : number = req.params.userId;
  await characterServices.getAllFullByUserId(userId)
  .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Characters ||${err.message}`
      });
    });
};
