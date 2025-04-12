module.exports = (db) =>
  db.model(
    'Crews',
    db.Schema({
      id: int,
      name: string,
      description: string,
      status: string,
      number: string,
      roman_name: string,
      total_prime: string,
      is_yonko: string,
    })
  );
