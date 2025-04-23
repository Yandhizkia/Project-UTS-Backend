module.exports = (db) =>
  db.model(
    'LTechnique', // Luffy Technique
    db.Schema({
      id: Number,
      name: String,
      translation: String,
      type: String,
      description: String,
      after_ellipsis: String,
      luffy_gear: {
        id: Number,
        name: String,
        description: String,
        count_technique: Number,
     },
   })
  );