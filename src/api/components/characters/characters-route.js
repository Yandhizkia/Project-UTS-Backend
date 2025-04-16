const express = require('express');

const charactersController = require('./characters-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/characters', route);

  // Get list of characters
  route.get('/', charactersController.getCharacters);

  // Create a new characters
  route.post('/', charactersController.createCharacters);

  // Get a character by id
  route.get('/:id', charactersController.getCharacter);

  // Update a character by id
  route.put('/:id', charactersController.updateCharacter);

  // TODO: Delete a character by id
  route.delete('/:id', charactersController.deleteCharacter);
};
