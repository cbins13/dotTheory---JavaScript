const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "movies.db",
  logging: false,
  define: {
    timestamps: true, 
  },
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Movie = require("./models/movie.js")(sequelize);

db.models.Person = require("./models/person.js")(sequelize);

module.exports = db;
