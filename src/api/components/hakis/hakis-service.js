const hakisRepository = require('./hakis-repository');

async function getHakis() {
  return hakisRepository.getHakis();
}

async function create(
  id,
  name,
  roman_name,
  description,
) {
  return hakisRepository.create(
    id,
    name,
    roman_name,
    description,
  );
}

async function getHaki(id) {
  return hakisRepository.getHaki(id);
}

async function updateHaki(
  id,
  name,
  roman_name,
  description
) {
  return hakisRepository.updateHaki(
    id,
    name,
    roman_name,
    description
  );
}

async function deleteHaki(id) {
  return hakisRepository.deleteHaki(id);
}

async function nameExists(name) {
  const haki = await hakisRepository.getHakiByName(name);
  return !!haki; // return true if user exists, false otherwise
}


module.exports = {
  getHakis,
  create,
  getHaki,
  updateHaki,
  deleteHaki,
  nameExists,
};
