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

module.exports = {
  getHakis,
  create,
};
