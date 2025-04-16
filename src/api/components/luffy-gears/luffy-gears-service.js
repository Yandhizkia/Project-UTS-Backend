const repository = require('./luffy-gears-repository');

async function getGears() {
  return repository.find({});
}

async function getGearById(id) {
  return repository.find(
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
  return repository.create({
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
