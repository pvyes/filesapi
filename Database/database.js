const { sequelize } = require("./models");

const createDb = function () {
  try {
    sequelize.sync({ force: true }).then(() => {
      console.log("Database & tables created.");
    });
  } catch (e) {
    console.error(e);
  }
};

const updateDb = function () {
  try {
    sequelize.sync({}).then(() => {
      console.log("Database & tables updated.");
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { sequelize, createDb, updateDb };
