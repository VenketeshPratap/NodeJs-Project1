const express=require('express');
const router=express.Router();

const postcontroller=require('../controllers/postcontroller');

router.get('/postweb',postcontroller.postweb);

module.exports=router;