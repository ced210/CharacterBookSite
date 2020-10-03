const db = require("../models");
const Classe = db.class;
const Op = db.Sequelize.Op;

// // Create and Save a new Class
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!",
  //   });
  //   return;
  // }

  // Create a Class
  const classe = {
    Name: req.body.Name,
    Description: req.body.Description,
  };

  // Save Class in the database
  // Classe.create(class);
  Classe.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Class.",
      });
    });
};

// Retrieve all Classe from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Classe.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving class.",
      });
    });
};

// Find a single Class with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Classe.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Class with id=" + id,
      });
    });
};

// Update a Class by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Classe.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Class was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Class with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Class with id=" + id,
      });
    });
};

// Delete a Class with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Classe.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Class was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Class with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Class with id=" + id,
      });
    });
};
