const express= require('express');
const router = require('./routers');

const app=express();
const port=8000;
const expresslayouts=require('express-ejs-layouts');

//for static files css,js
app.use(express.static('./assets'));


//layout need to put before route
app.use(expresslayouts);


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