const crewsRepository = require('./crews-repository');

async function getCrews() {
  return crewsRepository.getCrews();
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
  return crewsRepository.create(
    id,
    name,
    description,
    status,
    number,
    roman_name,
    total_prime,
    is_yonko
  );
}

async function getCrew(id) {
  return crewsRepository.getCrew(id);
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
  return crewsRepository.updateCrew(
    id,
    name,
    description,
    status,
    number,
    roman_name,
    total_prime,
    is_yonko
  );
}

async function deleteCrew(id) {
  return crewsRepository.deleteCrew(id);
}

async function nameExists(name) {
  const crew = await crewsRepository.getCrewByName(name);
  return !!crew;
}

module.exports = {
  getCrews,
  create,
  getCrew,
  updateCrew,
  deleteCrew,
  nameExists,
};
// commit ulang
