const db = require('../models');  
const SupplierModel = db.Supplier;


exports.list = async (req,res,next)=>{
    let data = await SupplierModel.findAll();
    // let data =[]

    res.json(data)
}

exports.detail = async (req,res,next)=>{
    const id = req.params.id
    let data = await SupplierModel.findByPk(id);
    // let data =[]

    res.json(data)
}

exports.add = async (req,res,next)=>{
    let data ={
        supplier_name : req.body.supplier_name,
        phone_number : req.body.phone_number,
        address : req.body.address,
        description : req.body.description,
    }

    let createData = await SupplierModel.create(data)

    res.json({
        status : 'OK',
        data : createData
    })
}

exports.update = async (req,res,next)=>{
    let id = req.params.id;
    let data ={
        supplier_name : req.body.supplier_name,
        phone_number : req.body.phone_number,
        address : req.body.address,
        description : req.body.description,
    }

    let execQuery = await SupplierModel.update(data,{where : {id : id}});

    res.json({
        status : 'OK',
        data : execQuery
    })
}

exports.delete = async (req,res,next)=>{
    let id = req.params.id;

    let execQuery = await SupplierModel.destroy({where :{id :id}});
    res.json({
        status : 'OK',
        data : execQuery
    })
}