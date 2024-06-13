const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VaccinationSchema = new Schema({
  tagId: { type: String, required: true },
  date: { type: Date, required: true },
  vaccineName: { type: String, required: true },
  administeredBy: { type: String, required: true }
});

module.exports = mongoose.model('Vaccination', VaccinationSchema);
