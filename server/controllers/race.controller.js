const db = require("../models");
const Races = db.race;
const Op = db.Sequelize.Op;

// // Create and Save a new Race
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!",
  //   });
  //   return;
  // }

  // Create a Race
  const race = {
    Name: req.body.Name,
    Description: req.body.Description,
  };

  // Save Race in the database
  // Races.create(race);
  Races.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Race.",
      });
    });
};

// Retrieve all Races from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  console.log(title);
  console.log(Races);
  console.log(condition);

  Races.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving race.",
      });
    });
};

// Find a single Race with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Races.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Race with id=" + id,
      });
    });
};

// Update a Race by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Races.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Race was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Race with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Race with id=" + id,
      });
    });
};

// Delete a Race with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Races.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Race was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Race with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Race with id=" + id,
      });
    });
};
