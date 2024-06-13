const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicationSchema = new Schema({
  tagId: { type: String, required: true },
  date: { type: Date, required: true },
  medicationName: { type: String, required: true },
  method: { type: String, required: true },
  dosage: { type: String, required: true },
  administeredBy: { type: String, required: true }
});

module.exports = mongoose.model('Medication', MedicationSchema);
