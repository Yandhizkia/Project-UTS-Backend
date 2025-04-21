const express = require('express');

const hakis = require('./components/hakis/hakis-route');
const boats = require('./components/boats/boats-route');

module.exports = () => {
  const app = express.Router();

  hakis(app);
  boats(app);

  return app;
};
