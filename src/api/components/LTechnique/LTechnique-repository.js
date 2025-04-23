const { LTechnique } = require('../../../models');

async function getLTechniques() {
  return LTechnique.find({});
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
  return LTechnique.create({
    id,
    name,
    translation,
    type,
    description,
    after_ellipsis,
    luffy_gear,
  });
}

async function getLTechnique(id) {
  return LTechnique.find(
    { id },
    {
      _id: 0,
      __v: 0,
    }
  );
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
  return LTechnique.updateOne(
    { id },
    {
      $set: {
        name,
        translation,
        type,
        description,
        after_ellipsis,
        luffy_gear,
      },
    }
  );
}

async function deleteLTechnique(id) {
  return LTechnique.deleteOne({ id });
}

async function getLTechniqueByName(name) {
  return LTechnique.findOne({ name });
}

module.exports = {
  getLTechniques,
  create,
  getLTechnique,
  updateLTechnique,
  deleteLTechnique,
  getLTechniqueByName,
};
