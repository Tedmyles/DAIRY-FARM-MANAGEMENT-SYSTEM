const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HealthCheckSchema = new Schema({
  tagId: { type: String, required: true },
  date: { type: Date, required: true },
  findings: { type: String, required: true },
  recommendations: { type: String, required: true }
});

module.exports = mongoose.model('HealthCheck', HealthCheckSchema);
