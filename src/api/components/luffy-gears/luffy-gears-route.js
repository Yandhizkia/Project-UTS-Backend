const express = require('express');
const controller = require('./luffy-gears-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/luffy-gears', route);

  // Get list of all gears
  route.get('/', controller.getGears);

  // Create a new gear
  route.post('/', controller.createGear);

  // Get a gear by ID
  route.get('/:id', controller.getGearById);
};
