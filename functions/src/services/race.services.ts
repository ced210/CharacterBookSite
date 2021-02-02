import { connect } from '../config';
import { Race } from '../entity/Race';

// Retrieve all Classe from the database.
exports.getAll = async () => {
  const connection = await connect();
  const racesRepo = connection.getRepository(Race);
	return await racesRepo.find()
    .then(data => data)
    .catch(err => err);
};

// Find a single Class with an id
exports.getById = async (id: number) => {
  const connection = await connect();
  const racesRepo = connection.getRepository(Race);
	return await racesRepo.findOne(id)
		.then(data => data)
		.catch(err => err); 
};
