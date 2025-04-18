/* eslint-disable camelcase */
const { LuffyGears } = require('../../../models');

async function getLuffyGears() {
  return LuffyGears.find({});
}

async function create(id, name, description, count_technique) {
  return LuffyGears.create({ id, name, description, count_technique });
}

async function getLuffyGear(id) {
  return LuffyGears.find(
    { id },
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function updateLuffyGear(id, name, description, count_technique) {
  return LuffyGears.updateOne(
    { id },
    {
      $set: {
        name,
        description,
        count_technique,
      },
    }
  );
}

async function deleteLuffyGear(id) {
  return LuffyGears.deleteOne({ id });
}

async function getLuffyGearByName(name) {
  return LuffyGears.findOne({ name });
}

module.exports = {
  getLuffyGears,
  create,
  getLuffyGear,
  updateLuffyGear,
  deleteLuffyGear,
  getLuffyGearByName,
};
