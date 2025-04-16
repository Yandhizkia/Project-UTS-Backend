module.exports = (db) =>
  db.model(
    'Boats',
    db.Schema({
      id: Number,
      name: String,
      job: String,
      size: String,
      birthday: String,
      age: String,
      bounty: String,
      status: String,
      crew: {
        id: Number,
        name: String,
        description: String,
        status: String,
        number: String,
        roman_name: String,
        total_prime: String,
        is_yonko: String,
      },
      character_captain: {
        id: Number,
        name: String,
        size: String,
        job: String,
        status: String,
        age: String,
        bounty: String,
      },
    })
  );

