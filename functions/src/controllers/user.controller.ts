import { User } from "../entity/User";

const userServices = require('../services/user.services');
// Retrieve all Classe from the database.
exports.create = async (req, res) => {
  const newUser = new User();
  newUser.username = req.body.username;
  newUser.password = req.body.password;
  newUser.email = req.body.email;
  return await userServices.create(newUser)
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    });
};

// Find a single Class with an id
exports.authenticate = async (req, res) => {
  const username : string = req.params.username;
  const password : string = req.params.password;
  return await userServices.authenticate(username, password)
  .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving User with username=${username} and password=${password} || ${err.message}`
      });
    });
};
