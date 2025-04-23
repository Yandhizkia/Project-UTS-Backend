module.exports = (db) =>
  db.model(
    'TheFilms',
    db.Schema({
      id: Number,
      number: String,
      title: String,
      description: String,
      release_date: String,
      saga: {
        id: Number,
        title: String,
        saga_number: String,
        saga_chapitre: String,
        saga_volume: String,
        saga_episode: String,
      },
    })
  );
