require('dotenv').config()
const { urlencoded } = require('express');
const User = require('../Models/User')
const JWT =require('jsonwebtoken')

const JWT_KEY = process.env.JWT_KEY;

const authorizeUser = async (req,res,next)=>{

    const token = req.cookies.token;
    try {

        if(!token) return res.status(401).json({message:"Please Login First !",success:false});

        const decode = JWT.verify(token,JWT_KEY);
        const id = decode.user;


        const user = await User.findById(id);

        // if(user.role  !=="admin" || user.role !== "Admin") return res.status(409).json({message:"Only admin can change on course !",success:false});
        
        req.user = user;
        next();
        
    } catch (error) {

         return res.status(401).json({message:"Please Login !",success:false});

        
    }
    
    
} 

module.exports = authorizeUser