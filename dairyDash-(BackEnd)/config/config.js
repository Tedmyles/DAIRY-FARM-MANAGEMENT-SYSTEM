const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = {
  mongoURI: process.env.MONGODB_URI,
  port: process.env.PORT || 5000,
};
