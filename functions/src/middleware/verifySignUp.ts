import { User } from "../entity/User";
import { connect } from '../config';
import { Role } from "../entity/Role";

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
	const connection = await connect();
	const usersRepo = connection.getRepository(User);
  // Username
	usersRepo.findOne({ username: req.body.username })
		.then(user => {
			if (user) {
				res.status(400).send({
					message: "Failed! Username is already in use!"
				});
				return;
			}
    // Email
		usersRepo.findOne({ email: req.body.email })
			.then(user => {
				if (user) {
					res.status(400).send({message: "Failed! Email is already in use!"});
					return;
      	}
      next();
    });
  });
};

const checkRolesExisted = async (req, res, next) => {
	const connection = await connect();
  const classesRepo = connection.getRepository(Role);
	const ROLES = await classesRepo.find();
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;