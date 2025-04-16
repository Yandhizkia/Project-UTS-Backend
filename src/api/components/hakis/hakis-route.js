const express = require('express');

const hakisController = require('./hakis-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/hakis', route);

  // Get list of books
  route.get('/', hakisController.getHakis);

  // Create a new book
  route.post('/', hakisController.createHakis);

  // TODO: Get a book by id

  // TODO: Update a book by id

  // TODO: Delete a book by id
};
