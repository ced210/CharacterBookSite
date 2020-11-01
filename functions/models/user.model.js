module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    // Id: {
    //   type: Sequelize.BIGINT,
    // },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    create_time: {
      type: Sequelize.DATE
    }
  });
  return User;
};
