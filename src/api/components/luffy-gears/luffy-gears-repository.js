const { luffyGears } = require('../../../models')['luffyGears'];

async function getGears() {
  return luffyGears.find({});
}

async function getGearById(id) {
  return luffyGears.find(
    { id },
    {
      id: 0,
      name: 0,
      description: 0,
      countTechniques: 0,
    }
  );
}

async function createGear(id, name, description, countTechniques) {
  return luffyGears.create({
    id,
    name,
    description,
    countTechniques,
  });
}

module.exports = {
  getGears,
  getGearById,
  createGear,
};
