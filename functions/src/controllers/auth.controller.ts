const { secret } = require("../config");
import { User } from "../entity/User";
import { Role } from "../entity/Role";
import { connect } from '../config';

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

export const signup = async (req, res) => {
  // Save User to Database
  const connection = await connect();
  const userRepo = connection.getRepository(User);
  return await userRepo.insert({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    role: !req.body.role ? { id: 1 } : req.body.role,
  })
  .then(user => {
    res.send({ message: "User with Role was registered successfully!" });
  })
    // .then(async user => {
    //   if (req.body.role) {
    //     const connection = await connect();
    //     const roleRepo = connection.getRepository(Role);
    //     roleRepo.find({ name: req.body.role })
    //     .then(roles => {
    //       user.setRoles(roles).then(() => {
    //         res.send({ message: "User with Role was registered successfully!" });
    //       });
    //     });
    //   } else {
    //     // user role = 1
    //     user.setRoles([1]).then(() => {
    //       res.send({ message: "User was registered successfully!" });
    //     });
    //   }
    // })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

export const signin = async (req, res) => {
  const connection = await connect();
  const userRepo = connection.getRepository(User);
  userRepo.findOne({username: req.body.username})
    .then(async user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 86400 // 24 hours
      });

      const connection = await connect();
      const roleRepo = connection.getRepository(Role);
      roleRepo.findOne(user.role)
      .then(role => {
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roleName: role.name,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};