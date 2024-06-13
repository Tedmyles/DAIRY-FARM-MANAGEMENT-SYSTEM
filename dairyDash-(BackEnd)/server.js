const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const animalRoutes = require('./routes/animalRoutes');
const milkProductionRoutes = require('./routes/milkProductionRoutes'); // Import milk production routes
const HealthRecordsRoutes = require('./routes/healthRecordsRoutes')
const path = require('path'); // Import path module

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dairyDash', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MONGODB CONNECTED...'))
  .catch(err => console.log('MongoDB connection error:', err));

// Middleware to parse JSON
app.use(express.json());

// Add CORS middleware
app.use(cors());

// Serve images from the "images" folder under the "/images" endpoint
app.use('/images', express.static(path.join(__dirname, 'images')));

// Use animal routes
app.use('/api', animalRoutes);

// Use milk production routes
app.use('/api', milkProductionRoutes);

// Use Health Records Routes
app.use('/api', HealthRecordsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
