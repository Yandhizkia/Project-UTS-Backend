const Hakis = require('../../../models') ['Hakis'];

async function getHakis() {
  return Hakis.find({});
}

async function create(
  id,
  name,
  roman_name,
  description,
) {
  return Hakis.create({
    id,
    name,
    roman_name,
    description, 
  });
}

async function getHaki(id) {
  return Hakis.find({ id },
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function updateHaki(
  id,
  name,
  roman_name,
  description
) {
  return Hakis.updateOne(
    { id },
    {
      $set: {
        name,
        roman_name,
        description,
      },
    }
  );
}

async function deleteHaki(id) {
  return Hakis.deleteOne({ id });
}

async function getHakiByName(name) {
  return Hakis.findOne({ name });
}

module.exports = {
  getHakis,
  create,
  getHaki,
  updateHaki,
  deleteHaki,
  getHakiByName,
};
