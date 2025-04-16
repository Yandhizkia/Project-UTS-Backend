const express = require('express');

const hakis = require('./components/hakis/hakis-route');

module.exports = () => {
  const app = express.Router();

  hakis(app);

  return app;
};
