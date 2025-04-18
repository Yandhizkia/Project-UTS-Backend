const express = require('express');

const swordsController = require('./swords-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/swords', route);

  // Get list of swords
  route.get('/', swordsController.getSwords);

  // Create a new swords
  route.post('/', swordsController.createSwords);

  // Get a sword by id
  route.get('/:id', swordsController.getSword);

  // Update a sword by id
  route.put('/:id', swordsController.updateSword);

  // TODO: Delete a sword by id
  route.delete('/:id', swordsController.deleteSword);
};
