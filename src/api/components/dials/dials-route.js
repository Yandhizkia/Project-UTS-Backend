const express = require('express');

const dialsController = require('./dials-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/dials', route);

  // Get list of dials
  route.get('/', dialsController.getDials);

  // Create a new dials
  route.post('/', dialsController.createDials);

  // Get a dials by name
  route.get('/:name', dialsController.getDial);

  // Update a dials by name
  route.put('/:name', dialsController.updateDial);

  // Delete a dials by name
  route.delete('/:name', dialsController.deleteDial);
};
