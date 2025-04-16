module.exports = (db) =>
  db.model(
    'Swords',
    db.Schema({
        id: Number,
        name: String,
        roman_name: String,
        type: String,
        category: String,
        description: String,
        isDestroy: Boolean,
      },
    )
  );