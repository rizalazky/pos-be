const db = require('../models');  
const ProductUnitModel = db.ProductUnit;
exports.list = async (req,res,next)=>{
    let data = await ProductUnitModel.findAll();
    // let data =[]

    res.json(data)
}

exports.add = async (req,res,next)=>{
    let data ={
        unit_name : req.body.unit_name
    }

    let createData = await ProductUnitModel.create(data)

    res.json({
        status : 'OK',
        data : createData
    })
}

exports.update = async (req,res,next)=>{
    let id = req.params.id;
    let data ={
        unit_name : req.body.unit_name
    }

    let execQuery = await ProductUnitModel.update(data,{where : {id : id}});

    res.json({
        status : 'OK',
        data : execQuery
    })
}

exports.delete = async (req,res,next)=>{
    let id = req.params.id;

    let execQuery = await ProductUnitModel.destroy({where :{id :id}});
    res.json({
        status : 'OK',
        data : execQuery
    })
}