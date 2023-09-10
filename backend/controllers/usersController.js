const User = require("../models/User")
const asyncHandler = require('express-async-handler');
const genrateToken = require("../utils/genrateToken");

const registerUser = asyncHandler(async(req,res)=>{
    const [name,email,password]  = req.body;
    const userExist = await User.findOne({email});
    if(userExist){
        res.status(400)
        throw new Error("User Already Exists !")
    }

    const user = await User.create({name,email,password})
    if(user){
        res.status(201).json({
            _id:user._id,
            name : user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:genrateToken(user._id)
        })
    }else{
        res.status(404)
        throw new Error("User Not Found!")
    }
})

const authController = asyncHandler (async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name : user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:genrateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error("Invalid email or password")
    }
})


const getUserProfile = asyncHandler (async (req,res)=>{
    const user = await User.findById(req.user._id)
    if(user){
        res.json({
            _id:user._id,
            name : user.name,
            email:user.email,
            isAdmin:user.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error("User not found")
    }
})

module.exports = {authController,getUserProfile,registerUser}