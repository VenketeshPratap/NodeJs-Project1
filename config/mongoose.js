const mongoose = require('mongoose');

// Use environment variables or a configuration file to store sensitive information
const uri = 'mongodb+srv://venketeshmall2:7p9T3Eghx0kpoLOL@cluster0.zv3ejx9.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to Database: MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err.message);
  });

const db = mongoose.connection;
module.exports = db;
