const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReproductiveHealthSchema = new Schema({
  tagId: { type: String, required: true },
  date: { type: Date, required: true },
  checkType: { type: String, required: true },
  findings: { type: String, required: true },
  recommendations: { type: String, required: true }
});

module.exports = mongoose.model('ReproductiveHealth', ReproductiveHealthSchema);
