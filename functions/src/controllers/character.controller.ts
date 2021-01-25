const characterServices = require('../services/character.services');
// import { Character } from "../entity/Character";

exports.save = async (req, res) => {
  const newCharacter = req.body;
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
