const express=require('express');
const router=express.Router();

const userscontroller=require('../controllers/usercontroller');

router.get('/profile',userscontroller.profile);

router.get('/sign-up',userscontroller.signup);
router.get('/sign-in',userscontroller.signin); 


module.exports=router;