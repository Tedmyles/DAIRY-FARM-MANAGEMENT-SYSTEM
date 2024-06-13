// models/Animal.js
const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  tagId: {
    type: String,
    required: true,
    unique: true
  },
  breed: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
