const express = require('express');
const multer = require('multer');
const animalController = require('../conrollers/animalController');
const router = express.Router();
const path = require('path');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../images')); // Specify the destination folder as "images"
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Keep the original file name
  }
});
const upload = multer({ storage: storage });

router.post('/animals', upload.single('image'), async (req, res) => {
  const { tagId, breed } = req.body;
  const image = req.file; // Access the uploaded file from req.file

  if (!tagId || !breed || !image) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const result = await animalController.addAnimal({ tagId, breed, image: image.originalname }); // Pass the file name
    res.status(201).json({ message: 'Animal added successfully', animal: result });
  } catch (error) {
    console.error('Error adding animal:', error);
    res.status(500).json({ message: 'Error adding animal', error: error.message });
  }
});

// Route to get all animals
router.get('/animals', async (req, res) => {
  try {
    const animals = await animalController.getAllAnimals();
    res.status(200).json(animals);
  } catch (error) {
    console.error('Error fetching animals:', error);
    res.status(500).json({ message: 'Error fetching animals', error: error.message });
  }
});

module.exports = router;
