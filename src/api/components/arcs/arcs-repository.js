const { Arcs }  = require('../../../models');

async function getArcs() {
  return Arcs.find({});
}

async function create(
  id,
  title,
  description,
  saga,
) {
  return Arcs.create({ 
    id,
    title,
    description,
    saga,
  });
}

async function getArc(id) {
  return Arcs.findOne({ id });
}

async function updateArc(
  id,
  title,
  description,
  saga
) {
  return Arcs.updateOne(
    { id },
    {
      $set: {
        title,
        description,
        saga,
      },
    }
  );
}

async function deleteArc(id) {
  return Arcs.deleteOne({ id });
}

async function getArcByTitle(title) {
  return Arcs.findOne({ title });
}

module.exports = {
  getArcs,
  create,
  getArc,
  updateArc,
  deleteArc,
  getArcByTitle,
};