const express = require('express');

const theFilmsController = require('./TheFilms-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/TheFilms', route);

  // Get list of TheFilms
  route.get('/', theFilmsController.getTheFilms);

  // Create a new TheFilms
  route.post('/', theFilmsController.createTheFilms);

  // TODO: Get a TheFilms by id
  route.get('/:id', theFilmsController.getTheFilm);

  // TODO: Update a TheFilms
  route.put('/:id', theFilmsController.updateTheFilms);

  // TODO: Delete a TheFilms
  route.delete('/:id', theFilmsController.deleteTheFilms);
};
