const express =  require('express');
const router = express.Router();
const Product = require("../models/Productmodel")
const asyncHandler = require('express-async-handler')


// get route for alll products
router.get("/products",asyncHandler (async (req,res)=>{
    const products = await Product.find({})
    res.json(products)
}))


// get router for single products
router.get('/products/:id',asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.json(product)
    }else{
        res.status(404).json({message:"Product not found"});
    }
}))

module.exports = router;