const Hakis = require('../../../models') ['Hakis'];

async function getHakis() {
  return Hakis.find({});
}

async function create(
  id,
  name,
  roman_name,
  description,
) {
  return Hakis.create({
    id,
    name,
    roman_name,
    description, 
  });
}

module.exports = {
  getHakis,
  create,
};
