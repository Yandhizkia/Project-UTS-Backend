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
  isDestroy,
) {
  return swordsRepository.create(
    roman_name,
    name,
    description,
    type,
    category,
    isDestroy,
  );
}

module.exports = {
  getSwords,
  create,
};