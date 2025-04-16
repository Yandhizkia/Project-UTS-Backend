const express = require('express');

const swords = require('./components/swords/swords-route');

module.exports = () => {
  const app = express.Router();
  
  swords(app);

  return app;
};
