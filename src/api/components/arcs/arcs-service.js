const arcsRepository = require('./arcs-repository');

async function getArcs() {
  return arcsRepository.getArcs();
}

async function create(
  id,
  title,
  description,
  saga
) {
  return arcsRepository.create(
    id,
    title,
    description,
    saga
  );
}

async function getArc(id) {
  return arcsRepository.getArc(id);
}

async function updateArc(
  id,
  title,
  description,
  saga
) {
  return arcsRepository.updateArc(
    id,
    title,
    description,
    saga
  );
}

async function deleteArc(id) {
  return arcsRepository.deleteArc(id);
}

async function titleExists(title) {
  const arc = await arcsRepository.getArcByTitle(title);
  return !!arc;
}

module.exports = {
  getArcs,
  create,
  getArc,
  updateArc,
  deleteArc,
  titleExists,
};
