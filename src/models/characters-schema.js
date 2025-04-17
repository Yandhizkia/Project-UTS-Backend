module.exports = (db) =>
  db.model(
    'Characters',
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
      fruit: {
        id: Number,
        name: String,
        description: String,
        filename: String,
        roman_name: String,
        technicalFile: String,
      },
    })
  );
