const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const luffyGears = require('./components/luffy-gears/luffy-gears-route');

module.exports = () => {
  const app = express.Router();

  books(app);
  users(app);
  luffyGears(app);

  return app;
};
