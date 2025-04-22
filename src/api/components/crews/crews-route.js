const express = require('express');

const crewsController = require('./crews-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/crews', route);

  // Get list of crews
  route.get('/', crewsController.getCrews);

  // Create a new crews
  route.post('/', crewsController.createCrews);

  // Get a crew by id
  route.get('/:id', crewsController.getCrew);

  // Update a crew by id
  route.put('/:id', crewsController.updateCrew);

  // TODO: Delete a crew by id
  route.delete('/:id', crewsController.deleteCrew);
};
// commit ulang
