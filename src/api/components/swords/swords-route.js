const express = require('express');

const swordsController = require('./swords-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/swords', route);

  // Get list of swords
  route.get('/', swordsController.getSwords);

  // Create a new swords
  route.post('/', swordsController.createSwords);

  // TODO: Get a swords by id

  // TODO: Update a swords by id

  // TODO: Delete a swords by id
};