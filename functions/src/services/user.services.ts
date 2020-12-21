import { connect } from '../config';
import { User } from '../entity/User';

// // Create and Save a new User
exports.create = async (user: User) => {
  const connection = await connect();
  const userRepo = connection.getRepository(User);
  return await userRepo.insert(user);
};

// Find a single User with an username and password
exports.authenticate = async (username, password) => {
  // search for attributes
  const connection = await connect();
  const userRepo = connection.getRepository(User);
  return await userRepo.findOne({ username, password })
		.then(data => data)
		.catch(err => err);
}
