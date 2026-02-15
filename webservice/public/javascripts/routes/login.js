var express = require('express');
var router = express.Router();
const {validateUser}=require("../service/loginSerivce");


router.post("/",async (req,res,next)=>{
    console.log("Login api..");
    const { username, password } = req.body;
    const result = await validateUser(username, password);
    res.json(result);
})

module.exports = router;
