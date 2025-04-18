const express = require('express');

const luffyGears = require('./components/luffy-gears/luffy-gears-route');
const dials = require('./components/dials/dials-route');

module.exports = () => {
  const app = express.Router();

  luffyGears(app);
  dials(app);

  return app;
};
