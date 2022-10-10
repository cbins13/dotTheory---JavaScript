const db = require("./db");
const { Movie, Person } = db.models;
const { Op } = db.Sequelize;

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    const movieInstances = await Promise.all([
      Movie.create({
        title: "Toy Story",
        runtime: 81,
        releaseDate: "1995-11-22",
        isAvailableOnVHS: true,
      }),
      Movie.create({
        title: "The Incredibles",
        runtime: 115,
        releaseDate: "2004-04-14",
        isAvailableOnVHS: true,
      }),
    ]);
    const moviesJSON = movieInstances.map((movie) => movie.toJSON());

    const movie3 = await Movie.build({
      title: "Toy Story 3",
      runtime: 103,
      releaseDate: "2010-06-18",
      isAvailableOnVHS: false,
    });
    await movie3.save();

    await Movie.create({
      title: "Home Alone",
      runtime: 100,
      releaseDate: "1989-12-25",
      isAvailableOnVHS: true,
    });

    const toyStory = await Movie.findByPk(1);
    await toyStory.destroy();

    const movies = await Movie.findAll({
      attributes: ["id", "title", "isAvailableOnVHS"],
      order: [["releaseDate", "DESC"]],
    });
    console.log(movies.map((movie) => movie.toJSON()));
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errors = error.errors.map((err) => err.message);
      console.error("Validation errors: ", errors);
    } else {
      throw error;
    }
  }
})();

(async () => {
  await db.sequelize.sync({ force: true });

  try {
    const personInstances = await Promise.all([
      Person.create({
        firstName: "Christian",
        lastName: "Binay-an",
      }),
      Person.create({
        firstName: "Domesa",
        lastName: "Binay-an",
      }),
    ]);
    const personJSON = personInstances.map((person) => person.toJSON());
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      const errors = error.errors.map((err) => err.message);
      console.error("Validation errors: ", errors);
    } else {
      throw error;
    }
  }
})();
