const lTechniqueRepository = require('./LTechnique-repository');

async function getLTechniques() {
  return lTechniqueRepository.getLTechniques();
}

async function create(
  id,
  name,
  translation,
  type,
  description,
  after_ellipsis,
  luffy_gear
) {
  return lTechniqueRepository.create(
    id,
    name,
    translation,
    type,
    description,
    after_ellipsis,
    luffy_gear
  );
}

async function getLTechnique(id) {
  return lTechniqueRepository.getLTechnique(id);
}

async function updateLTechnique(
  id,
  name,
  translation,
  type,
  description,
  after_ellipsis,
  luffy_gear
) {
  return lTechniqueRepository.updateLTechnique(
    id,
    name,
    translation,
    type,
    description,
    after_ellipsis,
    luffy_gear
  );
}

async function deleteLTechnique(id) {
  return lTechniqueRepository.deleteLTechnique(id);
}

async function nameExists(name) {
  const lTechnique = await lTechniqueRepository.getLTechniqueByName(name);
  return !!lTechnique;
}

module.exports = {
  getLTechniques,
  create,
  getLTechnique,
  updateLTechnique,
  deleteLTechnique,
  nameExists,
};
