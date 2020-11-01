module.exports = (sequelize, Sequelize) => {
  const character = sequelize.define("character", {
    // Id: {
    //   type: Sequelize.BIGINT,
    // },
    userId: {
      type: Sequelize.BIGINT
    },
    name: {
      type: Sequelize.STRING
    },
    raceId: {
      type: Sequelize.BIGINT
    },
    classId: {
      type: Sequelize.BIGINT
    },
    alignementId: {
      type: Sequelize.BIGINT
    },
    isGenderMale: {
      type: Sequelize.BOOLEAN
    },
    age: {
      type: Sequelize.INTEGER
    }
  });
  return character;
};
