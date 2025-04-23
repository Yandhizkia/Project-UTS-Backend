/* eslint-disable camelcase */
const dialsRepository = require('./dials-repository');

async function getDials() {
  return dialsRepository.getDials();
}

async function create(id, name, type) {
  return dialsRepository.create(id, name, type);
}

async function getDial(id) {
  return dialsRepository.getDial(id);
}

async function updateDial(id, name, type) {
  return dialsRepository.updateDial(id, name, type);
}

async function deleteDial(id) {
  return dialsRepository.deleteDial(id);
}

async function nameExists(name) {
  const Dial = await dialsRepository.getDialByName(name);
  return !!Dial;
}

module.exports = {
  getDials,
  create,
  getDial,
  updateDial,
  deleteDial,
  nameExists,
};
