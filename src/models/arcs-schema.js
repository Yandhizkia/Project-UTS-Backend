module.exports = (db) =>
  db.model(
    'Arcs',
    db.Schema({
      id: Number,
      title: String,
      description: String,
      sagaId: Number,
      saga: {
        id: Number,
        saga_number: String,
        title: String,
        saga_chapitre: String,
        saga_volume: String,
        saga_episode: String
      }
    })
  );
