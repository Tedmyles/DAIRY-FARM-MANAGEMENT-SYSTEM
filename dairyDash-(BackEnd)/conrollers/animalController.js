const Animal = require('../models/Animal');
const path = require('path');

const addAnimal = async ({ tagId, breed, image }) => {
  try {
    const newAnimal = new Animal({
      tagId,
      breed,
      image: image ? image : '' // Ensure image is not undefined
    });
    return await newAnimal.save();
  } catch (error) {
    throw new Error('Failed to add animal: ' + error.message);
  }
};


const getAllAnimals = async () => {
  try {
    return await Animal.find();
  } catch (error) {
    throw new Error('Failed to fetch animals: ' + error.message);
  }
};

module.exports = {
  addAnimal,
  getAllAnimals
};
