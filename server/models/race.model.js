module.exports = (sequelize, Sequelize) => {
  const Race = sequelize.define("race", {
    // Id: {
    //   type: Sequelize.BIGINT,
    // },
    Name: {
      type: Sequelize.STRING,
    },
    Description: {
      type: Sequelize.STRING,
    },
    SizeDescription: {
      type: Sequelize.STRING,
    },
    AgeDescription: {
      type: Sequelize.STRING,
    },
    SpeedDescription: {
      type: Sequelize.STRING,
    },
    LanguageDescription: {
      type: Sequelize.STRING,
    },
  });
  return Race;
};
