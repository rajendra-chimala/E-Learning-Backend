const User = require('../Models/User');
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken");
require("dotenv").config();

const JWT_KEY = process.env.JWT_KEY;


const userSignup = async (req,res)=>{
   const {name,email,password,role} = req.body;


   try {
    const isUser = await User.findOne({email});

    if(isUser) return res.status(409).json({message:"User Already Exist !",success:false});

    const encryptedPassword = await bcrypt.hashSync(password);

    const newUser = await User({
        name,
        email,
        password:encryptedPassword,
        role
    })

    newUser.save();
    
    res.status(200).json({message:"Signup Successfully !",success:true,newUser});


   } catch (error) {

    console.log("Error is User Signup ! : ",error);

    res.status(400).json({message:"Faild to create user !",success:false});
    
   }

}


const userLogin = async(req,res)=>{
   
    const {email,password} = req.body;

    try {
        
        const isUser = await User.findOne({email});

        if(!isUser) return res.status(401).json({message:"Invalid credentials !",success:false});

        const isPasswordMatch = await bcrypt.compareSync(password,isUser.password);

        if(!isPasswordMatch) return res.status(401).json({message:"Invalid credentials !",success:false});

        const token = JWT.sign({user:isUser._id},JWT_KEY,{expiresIn:'24h'});

        res.cookie('token',token);

        return res.status(200).json({message:"Log in Successfully !",success:true,token});




    } catch (error) {

        console.log("Error is Login !",error);
    res.status(400).json({message:"Login Fail !",success:false});


        
    }
}


const userLogout = async (req,res)=>{

    res.clearCookie('token');
    res.status(200).json({message:"User Log Out Successfully !",success:true})

}

module.exports = {userSignup,userLogin,userLogout}  