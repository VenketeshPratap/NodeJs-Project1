const express= require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;
const expresslayouts=require('express-ejs-layouts');
const router = require('./routers');
// const db=require('./config/mongoose');
const db = require('./config/mongoose');// requring DataBase



app.use(express.urlencoded());

app.use(cookieParser());

//for static files css,js
app.use(express.static('./assets'));

// Apply express-ejs-layouts middleware
app.use(expresslayouts);

// Extract styles and scripts from sub-pages into the layout
app.set('layout extractstyle', true);
app.set('layout extractscript', true);

//use express router
app.use('/', require('./routers'));

//set-up the view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running on port Test: ${port}`);
})