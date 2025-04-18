module.exports = (db) =>
  db.model(
    'LuffyGears',
    db.Schema({
      id: Number,
      name: String,
      description: String,
      count_technique: Number,
    })
  );
