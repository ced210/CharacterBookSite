const db = require("../models");
const Users = db.user;
const Op = db.Sequelize.Op;

// // Create and Save a new User
exports.create = (req, res) => {
  // Create a User
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  // Save User in the database
  // Users.create(user);
  Users.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

// Find a single User with an username and password
exports.authenticate = (req, res) => {
  const username = req.params.username;
  const password = req.params.password;
  // search for attributes
  Users.findOne({
    where: { username, password },
  })
    .then(function (data) {
      console.warn('receive data: ',data);
      return res.send(data);
    })
    .catch(err =>
      res.status(500).send({
        message: `Error retrieving User with username=${username} and password=${password}: ${err}`,
      })
    );
};
