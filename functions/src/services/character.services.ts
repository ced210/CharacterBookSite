import { connect } from '../config';
import { Character } from '../entity/Character';
const raceServices = require('../services/race.services');
const classServices = require('../services/class.services');

exports.save = async (character: Character) => {
  const connection = await connect();
  const characterRepo = connection.getRepository(Character);
  return await characterRepo.save(character);
};

// Find a single Class with an id
exports.getAllFullByUserId = async (userId: number) => {
  const connection = await connect();
  const characterRepo = connection.getRepository(Character);
  return await characterRepo.find({ userId: userId })
    .then(async characters => await Promise.all(characters.map(async (c) => ({
      ...c,
      userId: null,
      race: await raceServices.getById(c.raceId),
      class: await classServices.getById(c.classId),
    }))))
		.catch(err => err);
};
