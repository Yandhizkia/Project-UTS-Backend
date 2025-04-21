const express = require('express');

const boatsController = require('./boats-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/boats', route);

  // Get list of boats
  route.get('/', boatsController.getBoats);

  // Create a new boats
  route.post('/', boatsController.createBoats);

  // get a boats by id
  route.get('/:id', boatsController.getBoat);

  // update a boats by id
  route.put('/:id', boatsController.updateBoat);

  // TODO: Delete a boat by id
  route.delete('/:id', boatsController.deleteBoat);
};