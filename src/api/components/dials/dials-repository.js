/* eslint-disable camelcase */
const { Dials } = require('../../../models');

async function getDials() {
  return Dials.find({});
}

async function create(name, type) {
  return Dials.create({
    name,
    type,
  });
}

async function getDial(name) {
  return Dials.find(
    { name },
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function updateDial(name, type) {
  return Dials.updateOne(
    { name },
    {
      $set: {
        name,
        type,
      },
    }
  );
}

async function deleteLDial(name) {
  return Dials.deleteOne({ name });
}

async function getDialByName(name) {
  return Dials.findOne({ name });
}

module.exports = {
  getDials,
  create,
  getDial,
  updateDial,
  deleteLDial,
  getDialByName,
};
