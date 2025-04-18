const express = require('express');

const swords = require('./components/swords/swords-route');
const arcs = require('./components/arcs/arcs-route');

module.exports = () => {
  const app = express.Router();
  
  swords(app);
  arcs(app);

  return app;
};
