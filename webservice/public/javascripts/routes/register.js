var express = require('express');
const { addUser } = require('../service/registerService');
var router = express.Router();


router.post("/", async(req,res,next)=>{
    console.log("Register api used..")
    let {username,password,email}=req.body;
    let check=await addUser(username,password,email);
    res.json(check);
})

module.exports = router;
