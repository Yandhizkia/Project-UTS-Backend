module.exports = (db) =>
  db.model(
    'Crews',
    db.Schema({
      id: Number,
      name: String,
      description: String,
      status: String,
      number: String,
      roman_name: String,
      total_prime: String,
      is_yonko: String,
    })
  );
