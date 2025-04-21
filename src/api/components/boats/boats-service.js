const boatsRepository = require('./boats-repository');

async function getBoats() {
  return boatsRepository.getBoats();
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
  return boatsRepository.create(
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
  );
}

async function getBoat(id) {
  return boatsRepository.getBoat(id);
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
  return boatsRepository.updateBoat(
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
  );
}

async function deleteBoat(id) {
  return boatsRepository.deleteBoat(id);
}

async function nameExists(name) {
  const boat = await boatsRepository.getBoatByName(name);
  return !!boat;
}


module.exports = {
  getBoats,
  create,
  getBoat,
  updateBoat,
  deleteBoat,
  nameExists,
};
