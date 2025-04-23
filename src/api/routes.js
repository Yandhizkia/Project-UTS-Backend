const express = require('express');

const LTechnique = require('./components/LTechnique/LTechnique-route');
const TheFilms = require('./components/TheFilms/TheFilms-route');

module.exports = () => {
  const app = express.Router();

  LTechnique(app);
  TheFilms(app);

  return app;
};
