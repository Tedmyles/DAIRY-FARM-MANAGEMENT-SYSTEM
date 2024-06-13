const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LabTestSchema = new Schema({
  tagId: { type: String, required: true },
  date: { type: Date, required: true },
  test: { type: String, required: true },
  results: { type: String, required: true },
  followUpActions: { type: String, required: true }
});

module.exports = mongoose.model('LabTest', LabTestSchema);
