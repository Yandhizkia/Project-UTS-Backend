const { Swords } = require('../../../models');

async function getSwords() {
  return Swords.find({});
}

async function create(
  roman_name,
  name,
  description,
  type,
  category,
  isDestroy
) {
  return Swords.create({
    roman_name,
    name,
    type,
    description,
    category,
    isDestroy,
  });
}

async function getSword(id) {
  return Swords.findById(id);
}

async function updateSword(
  id,
  roman_name,
  name,
  description,
  type,
  category,
  isDestroy
) {
  return Swords.updateOne(
    { _id: id },
    {
      $set: {
        roman_name,
        name,
        description,
        type,
        category,
        isDestroy,
      },
    }
  );
}

async function deleteSword(id) {
  return Swords.deleteOne({ _id: id });
}

async function getSwordByName(name) {
  return Swords.findOne({ name });
}

module.exports = {
  getSwords,
  create,
  getSword,
  updateSword,
  deleteSword,
  getSwordByName,
};
