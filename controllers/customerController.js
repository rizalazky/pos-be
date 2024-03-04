const db = require('../models');  
const CustomerModel = db.Customer;


exports.list = async (req,res,next)=>{
    let data = await CustomerModel.findAll();
    // let data =[]

    res.json(data)
}

exports.detail = async (req,res,next)=>{
    let id = req.params.id
    let data = await CustomerModel.findByPk(id);
    // let data =[]

    res.json(data)
}

exports.add = async (req,res,next)=>{
    let data ={
        customer_name : req.body.customer_name,
        phone_number : req.body.phone_number,
    }

    let createData = await CustomerModel.create(data)

    res.json({
        status : 'OK',
        data : createData
    })
}

exports.update = async (req,res,next)=>{
    let id = req.params.id;
    let data ={
        customer_name : req.body.customer_name,
        phone_number : req.body.phone_number,
    }


    let execQuery = await CustomerModel.update(data,{where : {id : id}});

    res.json({
        status : 'OK',
        data : execQuery
    })
}

exports.delete = async (req,res,next)=>{
    let id = req.params.id;

    let execQuery = await CustomerModel.destroy({where :{id :id}});
    res.json({
        status : 'OK',
        data : execQuery
    })
}