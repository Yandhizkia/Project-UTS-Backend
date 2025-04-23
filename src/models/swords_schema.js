module.exports = (db) =>
  db.model(
    'Swords',
    db.Schema({
      roman_name: String,
      name: String,
      description: String,
      type: String,
      category: String,
      isDestroy: Boolean,
    },
  )
);