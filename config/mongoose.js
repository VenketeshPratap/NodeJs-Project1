const mongoose = require('mongoose');

const uri = 'mongodb+srv://venketeshmall2:qqQd08kHG79LKtiy@cluster0.czrohkn.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri).then(()=>{
     console.log('Connected to Database: MongoDB Atlas');
 }).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;
module.exports = db
