/* eslint-disable handle-callback-err */
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
    .then((data) => res.send(data))
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
  console.log(`username=${username}`);
  console.log(`password=${password}`);
  // search for attributes
  console.log(Users);
  Users.findOne({
    where: { username, password },
  })
    .then((data) => res.send(!!data))
    // eslint-disable-next-line handle-callback-err
    .catch((err) =>
      res.status(500).send({
        message: `Error retrieving User with username=${username} and password=${password}`,
      })
    );
};
