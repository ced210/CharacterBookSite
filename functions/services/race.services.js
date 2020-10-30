/* eslint-disable handle-callback-err */
const db = require("../models");
const Races = db.race;
const Op = db.Sequelize.Op;
// Retrieve all Races from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  console.log(title);
  console.log(Races);
  console.log(condition);

  Races.findAll({ where: condition })
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving race."
      });
    });
};

// Find a single Race with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  findOneValue(id)
    .then(data => res.send(data))
    // eslint-disable-next-line handle-callback-err
    .catch(err =>
      res.status(500).send({
        message: "Error retrieving Race with id=" + id
      })
    );
};

exports.findOneValue = id =>
  Races.findByPk(id)
    .then(data => data)
    .catch(err => err);
