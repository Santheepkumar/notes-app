const mongoose = require("mongoose");

const NotesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  notes: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Notes", NotesSchema, "notes");