const Swords  = require('../../../models') ['Swords'];

async function getSwords() {
  return Swords.find({});
}

async function create(
  roman_name,
  name,
  description,
  type,
  category,
  isDestroy,
) {
  return Swords.create({ 
    roman_name,
    name,
    description,
    type,
    category,
    isDestroy,
   });
}

module.exports = {
  getSwords,
  create,
};