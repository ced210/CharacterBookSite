import { connect } from '../config';
import { Classes } from '../entity/Class';
// Retrieve all Classe from the database.
exports.getAll = async () => {
  const connection = await connect();
  const classesRepo = connection.getRepository(Classes);

	return await classesRepo.find()
    .then(data => data)
    .catch(err => err);
};

// Find a single Class with an id
exports.getById = async (id: number) => {
  const connection = await connect();
  const classesRepo = connection.getRepository(Classes);

	return await classesRepo.findOne(id)
		.then(data => data)
		.catch(err => err); 
};
