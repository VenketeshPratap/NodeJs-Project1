const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller')
console.log("router loded");



router.get('/',homeController.home)
router.use('/users',require('./users'));
router.use('/post',require('./post'));

//for any further routers,access from here
//router.use('/routername',require('./routerfile));

module.exports=router;
