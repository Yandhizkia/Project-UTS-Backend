const express = require('express');

const LTechnique = require('./components/LTechnique/LTechnique-route');
const TheFilms = require('./components/TheFilms/TheFilms-route');
const hakis = require('./components/hakis/hakis-route');
const boats = require('./components/boats/boats-route');
const luffyGears = require('./components/luffy-gears/luffy-gears-route');
const dials = require('./components/dials/dials-route');
const characters = require('./components/characters/characters-route');
const crews = require('./components/crews/crews-route');
const swords = require('./components/swords/swords-route');
const arcs = require('./components/arcs/arcs-route');

module.exports = () => {
  const app = express.Router();

  LTechnique(app);
  TheFilms(app);
  hakis(app);
  boats(app);
  luffyGears(app);
  dials(app);
  characters(app);
  crews(app);
  swords(app);
  arcs(app);

  return app;
};
