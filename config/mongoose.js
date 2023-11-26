// mongoose.js

const mongoose = require('mongoose');

// MongoDB connection string. Replace 'your-db-uri' with your actual MongoDB URI.
const mongoURI = 'mongodb://your-db-uri';

// Mongoose connection options (optional).
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Add more options as needed
};

// Connect to MongoDB
mongoose.connect(mongoURI, mongooseOptions);

// Get the default connection
const db = mongoose.connection;

// Event listeners for Mongoose connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

// Export the Mongoose instance to use in other parts of your application
module.exports = mongoose;
