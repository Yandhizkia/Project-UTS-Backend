module.exports = (db) =>
  db.model(
    'Dials',
    db.Schema({
      id: Number,
      name: String,
      type: String,
    })
  );
