const express = require('express');

const hakisController = require('./hakis-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/hakis', route);

  // Get list of hakis
  route.get('/', hakisController.getHakis);

  // Create a new hakis
  route.post('/', hakisController.createHakis);

  // get a hakis by id
  route.get('/:id', hakisController.getHaki);

  // update a hakis by id
  route.put('/:id', hakisController.updateHaki);

  // TODO: Delete a haki by id
  route.delete('/:id', hakisController.deleteHaki);
};