const charactersRepository = require('./characters-repository');

async function getCharacters() {
  return charactersRepository.getCharacters();
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
  return charactersRepository.create(
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
  );
}

async function getCharacter(id) {
  return charactersRepository.getCharacter(id);
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
  return charactersRepository.updateCharacter(
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
  );
}

async function deleteCharacter(id) {
  return charactersRepository.deleteCharacter(id);
}

async function nameExists(name) {
  const character = await charactersRepository.getCharacterByName(name);
  return !!character; // Return true if user exists, false otherwise
}

module.exports = {
  getCharacters,
  create,
  getCharacter,
  updateCharacter,
  deleteCharacter,
  nameExists,
};
