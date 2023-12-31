const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    User :{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    orderItems:[
        {
            name:{
                type:String,
                requierd:true
            },
            qyt:{
                type:Number,
                required:true
            },
            image:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                requied:true
            },
            product:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Product"
            }
        }
    ],
    shipppingAddress:{
        address :{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        postalCode:{
            type:Number,
            required:true
        },
        country :{
            type:String,
            required:true
        }
    },
    payment : {
        type:String,
        required:true
    },
    paymentResult:{
        id:{
            type:String
        },
        status:{
            type:String
        },
        update_time:{
            type:String
        },
        email_address:{
            type:String
        }
    },
    taxPrice:{
        type:Number,
        required:true,
        default:0.0

    },
    shippingPrice:{
        type:String,
        required:true,
        default:0.0

    },
    totalPrice:{
        type:Number,
        requied:true,
        default:0.0

    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false
    },
    paidAt:{
        type:Date
    },
    isDelevired:{
        type:Boolean,
        required:true,
        default:false
    },
    DelevireAt:{
        type:Date
    }
},{
    timeStamps:true
})


const Order = mongoose.model('Order',orderSchema)

module.exports = Order;