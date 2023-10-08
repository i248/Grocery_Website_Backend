const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const product = new Schema({ 
    Image:{
        type: String,
    },   
    productname: {
        type: String,
    },
    discription:{
        type: String,
    },
    price: {
        type: Number,
    }
});

const  productModel = mongoose.model ("product",product);
module.exports = productModel;