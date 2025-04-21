const { Boats } = require('../../../models');

async function getBoats() {
  return Boats.find({});
}

async function create(
  id,
  name,
  job,
  size,
  brithday,
  age,
  bounty,
  status,
  crew,
  character_captain,
) {
  return Boats.create({
    id,
    name,
    job,
    size,
    brithday,
    age,
    bounty,
    status,
    crew,
    character_captain,
  });
}

async function getBoat(id) {
  return Boats.find({ id },
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function updateBoat(
  id,
  name,
  job,
  size,
  brithday,
  age,
  bounty,
  status,
  crew,
  character_captain
) {
  return Boats.updateOne(
    { id },
    {
      $set: {
        name,
        job,
        size,
        brithday,
        age,
        bounty,
        status,
        crew,
        character_captain,
      },
    }
  );
}

async function deleteBoat(id) {
  return Boats.deleteOne({ id });
}

async function getBoatByName(name) {
  return Boats.findOne({ name });
}

module.exports = {
  getBoats,
  create,
  getBoat,
  updateBoat,
  deleteBoat,
  getBoatByName,
};
