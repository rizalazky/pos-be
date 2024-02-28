const db = require('../models');  
const ProductModel = db.ProductModel;
exports.list = async (req,res,next)=>{
    let data = await ProductModel.findAll();
    // let data =[]

    res.json(data)
}

exports.add = async (req,res,next)=>{
    let data ={
        product_name : req.body.product_name,
        code : req.body.code,
        category_id : req.body.category_id,
        unit_id : req.body.unit_id,
        price : req.body.price,
        stock : req.body.stock,
        description : req.body.description,
    }

    let createData = await ProductModel.create(data)

    res.json({
        status : 'OK',
        data : createData
    })
}

exports.update = async (req,res,next)=>{
    let id = req.params.id;
    let data ={
        product_name : req.body.product_name,
        code : req.body.code,
        category_id : req.body.category_id,
        unit_id : req.body.unit_id,
        price : req.body.price,
        stock : req.body.stock,
        description : req.body.description,
    }

    let execQuery = await ProductModel.update(data,{where : {id : id}});

    res.json({
        status : 'OK',
        data : execQuery
    })
}

exports.delete = async (req,res,next)=>{
    let id = req.params.id;

    let execQuery = await ProductModel.destroy({where :{id :id}});
    res.json({
        status : 'OK',
        data : execQuery
    })
}