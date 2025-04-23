module.exports = (db) =>
  db.model(
    'Hakis',
    db.Schema({
      id: Number,
      name: String,
      roman_name: String,
      description: String,
    })
  );

