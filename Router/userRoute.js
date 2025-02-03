const express = require('express');
const router = express.Router();
const User = require("../Models/User")
const {userSignup, userLogin, userLogout} = require("../Controller/userController");

router.post("/signup", userSignup);  
router.post("/login", userLogin);  
router.get("/logout",userLogout);

router.get('/user/all',async (req,res)=>{
    const users = await User.find();

    return res.status(200).json(users);
    
})





module.exports = router