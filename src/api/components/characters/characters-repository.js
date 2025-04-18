const { Characters } = require('../../../models');

async function getCharacters() {
  return Characters.find({});
}

async function create(
  id,
  name,
  job,
  size,
  birthday,
  age,
  bounty,
  status,
  crew,
  fruit
) {
  return Characters.create({
    id,
    name,
    job,
    size,
    birthday,
    age,
    bounty,
    status,
    crew,
    fruit,
  });
}

async function getCharacter(id) {
  return Characters.find(
    { id },
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function updateCharacter(
  id,
  name,
  job,
  size,
  birthday,
  age,
  bounty,
  status,
  crew,
  fruit
) {
  return Characters.updateOne(
    { id },
    {
      $set: {
        name,
        job,
        size,
        birthday,
        age,
        bounty,
        status,
        crew,
        fruit,
      },
    }
  );
}

async function deleteCharacter(id) {
  return Characters.deleteOne({ id });
}

async function getCharacterByName(name) {
  return Characters.findOne({ name });
}

module.exports = {
  getCharacters,
  create,
  getCharacter,
  updateCharacter,
  deleteCharacter,
  getCharacterByName,
};
