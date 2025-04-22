const { Crews } = require('../../../models');

async function getCrews() {
  return Crews.find({});
}

async function create(
  id,
  name,
  description,
  status,
  number,
  roman_name,
  total_prime,
  is_yonko
) {
  return Crews.create({
    id,
    name,
    description,
    status,
    number,
    roman_name,
    total_prime,
    is_yonko,
  });
}

async function getCrew(id) {
  return Crews.find(
    { id },
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function updateCrew(
  id,
  name,
  description,
  status,
  number,
  roman_name,
  total_prime,
  is_yonko
) {
  return Crews.updateOne(
    { id },
    {
      $set: {
        name,
        description,
        status,
        number,
        roman_name,
        total_prime,
        is_yonko,
      },
    }
  );
}

async function deleteCrew(id) {
  return Crews.deleteOne({ id });
}

async function getCrewByName(name) {
  return Crews.findOne({ name });
}

module.exports = {
  getCrews,
  create,
  getCrew,
  updateCrew,
  deleteCrew,
  getCrewByName,
};
