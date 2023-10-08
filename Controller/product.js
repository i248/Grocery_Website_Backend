const { response } = require("express");
const productModel = require("../Model/product");

module.exports.mygetproduct= async (req,res)=>{

    try {
        let data = await productModel.find({});
        if (data){
          
        return res.status(200).json({ productList : data});
           }else{
         return res.status(200).json ({ error: "not able to do" })
                     } 
    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
}

module.exports.mycreateproduct=(req,res)=>{
    console.log("body",req.body)
    const myproduct= productModel.create(req.body)
    myproduct.then(resp =>{
        res.status(201).json(resp._id)
    }).catch(err=>{
        res.status(401).json(err)
    })
}
