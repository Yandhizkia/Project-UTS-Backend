/* eslint-disable camelcase */
const luffyGearsRepository = require('./luffy-gears-repository');

async function getLuffyGears() {
  return luffyGearsRepository.getLuffyGears();
}

async function create(id, name, description, count_technique) {
  return luffyGearsRepository.create(id, name, description, count_technique);
}

async function getLuffyGear(id) {
  return luffyGearsRepository.getLuffyGear(id);
}

async function updateLuffyGear(id, name, description, count_technique) {
  return luffyGearsRepository.updateLuffyGear(
    id,
    name,
    description,
    count_technique
  );
}

async function deleteLuffyGear(id) {
  return luffyGearsRepository.deleteLuffyGear(id);
}

async function nameExists(name) {
  const luffyGear = await luffyGearsRepository.getLuffyGearByName(name);
  return !!luffyGear;
}

module.exports = {
  getLuffyGears,
  create,
  getLuffyGear,
  updateLuffyGear,
  deleteLuffyGear,
  nameExists,
};
