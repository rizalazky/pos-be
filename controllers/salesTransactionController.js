const db = require('../models');  
const SalesTransactionModel = db.SalesTransaction;
const SalesTransactionItemModel = db.SalesTransactionItems;

SalesTransactionItemModel.sync()

exports.processTransaction = async(req,res,next)=>{
    console.log(req.body);
    const dataTransactionItemsReq = req.body.transaction_items;
    const dataTransaction = {
        invoice: 'INV'+ Math.floor(100000 + Math.random() * 900000),
        customer_id: req.body.customer_id,
        discount: req.body.discount,
        transaction_date: req.body.transaction_date,
        cash: req.body.cash,
        notes: req.body.notes,
        user_by: req.body.user_by
    }

    const insertSalesTrx = await SalesTransactionModel.create(dataTransaction);
    const salesTrxID = await insertSalesTrx.id;
    

    let dataTransactionItems = dataTransactionItemsReq.map(function (item) {
        return {
            sales_transaction_id: salesTrxID,
            product_id: item.id,
            product_price: item.price,
            qty: item.qty,
            discount: item.discount
        }
    });

    const bulkCreateTransactionItems = await SalesTransactionItemModel.bulkCreate(dataTransactionItems)


    res.json({
        status :'OK',
        data : {
            trx : dataTransaction,
            trxItems :dataTransactionItems
        }
    }) 
}