const express = require('express');

const luffyGearsController = require('./luffy-gears-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/luffy-gears', route);

  // Get list of luffy-gears
  route.get('/', luffyGearsController.getLuffyGears);

  // Create a new luffy-gears
  route.post('/', luffyGearsController.createLuffyGears);

  // Get a luffy-gear by id
  route.get('/:id', luffyGearsController.getLuffyGear);

  // Update a luffy-gear by id
  route.put('/:id', luffyGearsController.updateLuffyGear);

  // Delete a luffy-gear by id
  route.delete('/:id', luffyGearsController.deleteLuffyGear);
};
