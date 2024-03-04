const db = require('./../models');  
const ProductCategory = db.ProductCategory;
exports.list = async (req,res,next)=>{
    let id = req.params.id;
    console.log(id);
    let data = !id ? await ProductCategory.findAll() : await ProductCategory.findByPk(id);
    // let data =[]

    res.json(data)
}

exports.add = async (req,res,next)=>{
    let data ={
        name : req.body.name
    }

    let createData = await ProductCategory.create(data)

    res.json({
        status : 'OK',
        data : createData
    })
}

exports.update = async (req,res,next)=>{
    let id = req.params.id;
    let data ={
        name : req.body.name
    }

    let execQuery = await ProductCategory.update(data,{where : {id : id}});

    res.json({
        status : 'OK',
        data : execQuery
    })
}

exports.delete = async (req,res,next)=>{
    let id = req.params.id;
    console.log('DELETE',id)
    let execQuery = await ProductCategory.destroy({where :{id :id}});
    res.json({
        status : 'OK',
        data : execQuery
    })
}