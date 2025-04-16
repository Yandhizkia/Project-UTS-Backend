const express = require('express');

const characters = require('./components/characters/characters-route');

module.exports = () => {
  const app = express.Router();

  characters(app);

  return app;
};
