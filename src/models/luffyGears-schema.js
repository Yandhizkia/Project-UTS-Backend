module.exports = (db) =>
  db.model(
    'LuffyGears',
    db.Schema({
      id: Number,
      Name: String,
      Description: String,
      countTechniques: Number,
    })
  );
