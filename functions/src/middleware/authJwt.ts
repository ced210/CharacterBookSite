import { User } from "../entity/User";
const jwt = require("jsonwebtoken");
import { connect } from "../config";

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  const secret: string = 'coque-licot'
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const isAdmin = async (req, res, next) => {
	const connection = await connect();
	const usersRepo = connection.getRepository(User);
	usersRepo.findOne(req.userId, { relations: ["role"] })
	.then(user => {
    if (user.role.name === "admin") {
      next();
      return;
    }
    res.status(403).send({
      message: "Require Admin Role!"
    });
    return;
  })
  .catch(e => (res.status(500).send({
      message: e.message
    })));
};

const isModerator = async (req, res, next) => {
  const connection = await connect();
	const usersRepo = connection.getRepository(User);
	usersRepo.findOne(req.userId, { relations: ["role"] })
		.then(user => {
			if (user.role.name === "mod") {
        next();
        return;
      }
      res.status(403).send({
        message: "Require Moderator Role!"
      });
  });
};

const isModeratorOrAdmin = async (req, res, next) => {
const connection = await connect();
	const usersRepo = connection.getRepository(User);
	usersRepo.findOne(req.userId, { relations: ["role"] })
  .then(user => {
    if (user.role.name === "mod") {
      next();
      return;
    }
    if (user.role.name === "admin") {
      next();
      return;
    }
    res.status(403).send({
      message: "Require Moderator or Admin Role!"
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin
};
module.exports = authJwt;