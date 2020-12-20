const classServices = require('../services/class.services');
// Retrieve all Classe from the database.
exports.findAll = async (req, res) => {
  await classServices.getAll()
  .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving class."
      });
    });
};

// Find a single Class with an id
exports.findOne = async (req, res) => {
  const id : number = req.params.id;
  await classServices.getById(id)
  .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving class."
      });
    });
};
