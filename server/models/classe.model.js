module.exports = (sequelize, Sequelize) => {
  const Classe = sequelize.define("classe", {
    // Id: {
    //   type: Sequelize.BIGINT,
    // },
    Name: {
      type: Sequelize.STRING,
    },
    Description: {
      type: Sequelize.STRING,
    },
  });
  return Classe;
};
