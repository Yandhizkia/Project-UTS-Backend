/* eslint-disable camelcase */
const dialsRepository = require('./dials-repository');

async function getDials() {
  return dialsRepository.getDials();
}

async function create(name, type) {
  return dialsRepository.create(name, type);
}

async function getDial(name) {
  return dialsRepository.getDial(name);
}

async function updateDial(name, type) {
  return dialsRepository.updateDial(name, type);
}

async function deleteDial(name) {
  return dialsRepository.deleteDial(name);
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
