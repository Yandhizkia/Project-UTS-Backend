const swordsRepository = require('./swords-repository');

async function getSwords() {
  return swordsRepository.getSwords();
}

async function create(
  roman_name,
  name,
  description,
  type,
  category,
  isDestroy
) {
  return swordsRepository.create(
    roman_name,
    name,
    description,
    type,
    category,
    isDestroy
  );
}

async function getSword(id) {
  return swordsRepository.getSword(id);
}

async function updateSword(
  roman_name,
  name,
  description,
  type,
  category,
  isDestroy
) {
  return swordsRepository.updateSword(
    roman_name,
    name,
    description,
    type,
    category,
    isDestroy
  );
}

async function deleteSword(id) {
  return swordsRepository.deleteSword(id);
}

async function nameExists(name) {
  const sword = await swordsRepository.getSwordByName(name);
  return !!sword; // Return true if user exists, false otherwise
}

module.exports = {
  getSwords,
  create,
  getSword,
  updateSword,
  deleteSword,
  nameExists,
};
