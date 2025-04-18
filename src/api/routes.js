const express = require('express');

const luffyGears = require('./components/luffy-gears/luffy-gears-route');
const dials = require('./components/dials/dials-route');
const characters = require('./components/characters/characters-route');
const crews = require('./components/crews/crews-route');

module.exports = () => {
  const app = express.Router();

  luffyGears(app);
  dials(app);
  characters(app);
  crews(app);

  return app;
};
