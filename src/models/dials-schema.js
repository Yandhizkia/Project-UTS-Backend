module.exports = (db) =>
  db.model(
    'Dials',
    db.Schema({
      name: String,
      type: String,
    })
  );
