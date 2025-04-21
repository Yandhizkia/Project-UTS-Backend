const express = require('express');

const arcsController = require('./arcs-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/arcs', route);

  // Get list of arcs
  route.get('/', arcsController.getArcs);

  // Create a new arcs
  route.post('/', arcsController.createArcs);

  // Get a arc by id
  route.get('/:id', arcsController.getArc);

  // Update a arcs by id
  route.put('/:id', arcsController.updateArc);

  // TODO: Delete an arcs by id
  route.delete('/:id', arcsController.deleteArc);
};