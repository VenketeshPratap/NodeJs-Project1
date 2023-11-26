const express= require('express');
const router = require('./routers');

const app=express();
const port=8000;


//use express router

app.use('/', require('./routers'));


app.listen(port, function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running on port Test: ${port}`);
})