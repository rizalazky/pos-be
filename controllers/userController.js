const db = require('../models');  
const UserModel = db.User;
const RoleModel = db.Role;

UserModel.sync()
RoleModel.sync()

exports.list = async (req,res,next)=>{
    let data = await UserModel.findAll({
        include : [{
            model : RoleModel,
            required:true
        }]
    });
    // let data =[]

    res.json(data)
}

exports.detail = async (req,res,next) =>{
    const id = req.params.id;
    let data = await UserModel.findByPk(id,{
        include : [{
            model : RoleModel,
            required:true
        }]
    });
    // let data =[]

    res.json(data)
}

exports.add = async (req,res,next)=>{
    let data ={
        usernamae: req.body.usernamae,
        password: req.body.password,
        image: req.body.image,
        role_id: req.body.role_id,
        address: req.body.address
    }

    let createData = await UserModel.create(data)

    res.json({
        status : 'OK',
        data : createData
    })
}

exports.update = async (req,res,next)=>{
    let id = req.params.id;
    let data ={
        usernamae: req.body.usernamae,
        password: req.body.password,
        image: req.body.image,
        role_id: req.body.role_id,
        address: req.body.address
    }

    let execQuery = await UserModel.update(data,{where : {id : id}});

    res.json({
        status : 'OK',
        data : execQuery
    })
}

exports.delete = async (req,res,next)=>{
    let id = req.params.id;

    let execQuery = await UserModel.destroy({where :{id :id}});
    res.json({
        status : 'OK',
        data : execQuery
    })
}