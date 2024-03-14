const db = require('../models');  
const Role = db.Role;


exports.list = async (req,res,next)=>{
    let id = req.params.id;
    console.log(id);
    let data = !id ? await Role.findAll() : await Role.findByPk(id);
    // let data =[]

    res.json(data)
}

exports.add = async (req,res,next)=>{
    let data ={
        role_name : req.body.role_name
    }

    try {
        
        let createData = await Role.create(data)
    
        res.json({
            status : 'OK',
            data : createData
        })
    } catch (error) {
        console.log('errrror',error.errors[0].message)
        res.json({
            status : 'FAIL',
            errors : error.errors
        })
    }
}

exports.update = async (req,res,next)=>{
    let id = req.params.id;
    let data ={
        role_name : req.body.role_name
    }

    let execQuery = await Role.update(data,{where : {id : id}});

    res.json({
        status : 'OK',
        data : execQuery
    })
}

exports.delete = async (req,res,next)=>{
    let id = req.params.id;
    console.log('DELETE',id)
    let execQuery = await Role.destroy({where :{id :id}});
    res.json({
        status : 'OK',
        data : execQuery
    })
}