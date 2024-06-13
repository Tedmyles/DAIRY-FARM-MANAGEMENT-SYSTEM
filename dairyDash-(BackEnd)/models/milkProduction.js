// models/MilkProduction.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MilkProductionSchema = new Schema({
  tagId: {
    type: String,
    required: true
  },
  morning: {
    type: Number,
    required: true
  },
  evening: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  grandTotal: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('MilkProduction', MilkProductionSchema);
