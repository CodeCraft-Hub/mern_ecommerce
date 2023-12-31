const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const productSchema = mongoose.Schema({
    User : {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        rewquired:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        required:true
    },
    numReviews : {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    countInStock:{
        type:Number,
        required:true
    }
});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;