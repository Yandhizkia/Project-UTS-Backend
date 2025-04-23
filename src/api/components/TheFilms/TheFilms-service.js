const theFilmsRepository = require('./TheFilms-repository');

async function getTheFilms() {
  return theFilmsRepository.getTheFilms();
}

async function create(id, number, title, description, release_date, saga) {
  return theFilmsRepository.create(
    id,
    number,
    title,
    description,
    release_date,
    saga
  );
}

async function getTheFilm(id) {
  return theFilmsRepository.getTheFilm(id);
}

async function updateTheFilms (
  id,
  number,
  title,
  description,
  release_date,
  saga
) {
  return theFilmsRepository.updateTheFilms(
    id,
    number,
    title,
    description,
    release_date,
    saga
  );
}

async function deleteTheFilms(id) {
  return theFilmsRepository.deleteTheFilms(id);
}

async function titleExists(title) {
  const theFilms = await theFilmsRepository.getTheFilmsByTitle(title);
  return !!theFilms;
}

module.exports = {
  getTheFilms,
  create,
  getTheFilm,
  updateTheFilms,
  deleteTheFilms,
  titleExists,
};