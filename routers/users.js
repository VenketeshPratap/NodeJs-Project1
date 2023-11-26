const express=require('express');
const router=express.Router();

const userscontroller=require('../controllers/usercontroller');

router.get('/profile',userscontroller.profile);


module.exports=router;