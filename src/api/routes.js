const express = require('express');

const luffyGears = require('./components/luffy-gears/luffy-gears-route');
const dials = require('./components/dials/dials-route');
const characters = require('./components/characters/characters-route');
const crews = require('./components/crews/crews-route');
const swords = require('./components/swords/swords-route');
const arcs = require('./components/arcs/arcs-route');

module.exports = () => {
  const app = express.Router();

  luffyGears(app);
  dials(app);
  characters(app);
  crews(app);
  swords(app);
  arcs(app);

  return app;
};
