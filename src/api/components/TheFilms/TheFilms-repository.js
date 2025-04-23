const { TheFilms } = require('../../../models');

async function getTheFilms() {
  return TheFilms.find({});
}

async function create(id, number, title, description, release_date, saga) {
  return TheFilms.create({ 
    id,
    number,
    title,
    description,
    release_date,
    saga,
  });
}

async function getTheFilm(id) {
  return TheFilms.find(
    { id },
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function updateTheFilms(
  id,
  number,
  title,
  description,
  release_date,
  saga
) {
  return TheFilms.updateOne(
    { id },
    {
      $set: {
        number,
        title,
        description,
        release_date,
        saga
      },
    }
  );
}

async function deleteTheFilms(id) {
  return TheFilms.deleteOne({ id });
}

async function getTheFilmsByTitle(title) {
  return TheFilms.findOne({ title });
}

module.exports = {
  getTheFilms,
  create,
  getTheFilm,
  updateTheFilms,
  deleteTheFilms,
  getTheFilmsByTitle,
};