const raceServices = require('../services/race.services');
// Retrieve all Classe from the database.
exports.getAll = async (req, res) => {
  await raceServices.getAll()
  .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving races."
      });
    });
};

// Find a single Class with an id
exports.findOne = async (req, res) => {
  const id : number = req.params.id;
  await raceServices.getById(id)
  .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving race."
      });
    });
};
