const express = require('express');

const characters = require('./components/characters/characters-route');
const crews = require('./components/crews/crews-route');

module.exports = () => {
  const app = express.Router();

  characters(app);
  crews(app);

  return app;
};
