const express = require('express');

const LTechniqueController = require('./LTechnique-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/LTechnique', route);

  // Get list of LTechnique
  route.get('/', LTechniqueController.getLTechniques);

  // Create a new LTechnique
  route.post('/', LTechniqueController.createLTechnique);

  // Get a LTechnique by id
  route.get('/:id', LTechniqueController.getLTechnique);

  // Update a LTechnique by id
  route.put('/:id', LTechniqueController.updateLTechnique);

  // Delete a LTechnique by id
  route.delete('/:id', LTechniqueController.deleteLTechnique);
};
