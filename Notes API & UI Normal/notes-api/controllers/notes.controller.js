const Notes = require("../models/notes.model");

// loading data
const load = (req, form) => {
  form.title = req.body.title;
  form.notes = req.body.notes;
};

// creating notes
const createNotes = (req, res, next) => {
  let notes;
  notes = new Notes();
  load(req, notes);

  return notes
    .save()
    .then((notes) => res.json(notes))
    .catch(next);
};

// get single notes
const getNotes = (req, res, next) => {
  Notes.findById(req.params.id)
    .then((notes) => res.json(notes))
    .catch(next);
};

// get all notes
const getAllNotes = (req, res, next) => {
  Notes.find({})
    .then((notes) => res.json(notes))
    .catch(next);
};

// remove notes
const removeNotes = (req, res, next) => {
  Notes.findOneAndRemove({ _id: req.params.id })
    .then((notes) => res.json(notes))
    .catch(next);
};

// update notes
const updateNotes = (req, res, next) => {
  let notes;
  Notes.findById(req.params.id)
    .then((note) => {
      notes = note;
      load(req, notes);
      return notes.save();
    })
    .then((notes) => res.json(notes))
    .catch(next);
};

module.exports = {
  createNotes,
  getNotes,
  getAllNotes,
  removeNotes,
  updateNotes,
};
