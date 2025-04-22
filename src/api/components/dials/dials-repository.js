/* eslint-disable camelcase */
const { Dials } = require('../../../models');

async function getDials() {
  return Dials.find({});
}

async function create(id, name, type) {
  return Dials.create({
    id,
    name,
    type,
  });
}

async function getDial(id) {
  return Dials.find(
    { id },
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function updateDial(id, name, type) {
  return Dials.updateOne(
    { id },
    {
      $set: {
        name,
        type,
      },
    }
  );
}

async function deleteDial(id) {
  return Dials.deleteOne({ id });
}

async function getDialByName(name) {
  return Dials.findOne({ name });
}

module.exports = {
  getDials,
  create,
  getDial,
  updateDial,
  deleteDial,
  getDialByName,
};
