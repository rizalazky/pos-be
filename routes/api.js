const express= require('express')
const router = express.Router();
const categoryController = require('../controllers/productCategoryController');
const unitController = require('../controllers/productUnitController');
const productController = require('../controllers/productController');
const supplierController = require('../controllers/supplierController');
const customerController = require('../controllers/customerController');
const roleController = require('../controllers/roleController');
const userController = require('../controllers/userController');
const salesTransactionController = require('../controllers/salesTransactionController');
const upload = require('../middlewares/upload');

router.get('/',(req,res)=>{
    res.send('Hello API')
})
// CATEGORY PRODUCT RESTFULL
router.get('/category',categoryController.list)
router.get('/category/:id',categoryController.list)
router.post('/category',categoryController.add)
router.put('/category/:id',categoryController.update)
router.delete('/category/:id',categoryController.delete)

// UNII PRODUCT RESTFULL
router.get('/unit',unitController.list)
router.get('/unit/:id',unitController.list)
router.post('/unit',unitController.add)
router.put('/unit/:id',unitController.update)
router.delete('/unit/:id',unitController.delete)


// PRODUCT RESTFULL
router.get('/product',productController.list)
router.get('/product/:id',productController.detail)
router.post('/product',productController.add)
router.put('/product/:id',productController.update)
router.delete('/product/:id',productController.delete)

// SUPLIER RESTFULL
router.get('/supplier',supplierController.list)
router.get('/supplier/:id',supplierController.detail)
router.post('/supplier',supplierController.add)
router.put('/supplier/:id',supplierController.update)
router.delete('/supplier/:id',supplierController.delete)

// PRODUCT RESTFULL
router.get('/customer',customerController.list)
router.get('/customer/:id',customerController.detail)
router.post('/customer',customerController.add)
router.put('/customer/:id',customerController.update)
router.delete('/customer/:id',customerController.delete)

// ROLE RESTFULL
router.get('/role',roleController.list)
router.get('/role/:id',roleController.list)
router.post('/role',roleController.add)
router.put('/role/:id',roleController.update)
router.delete('/role/:id',roleController.delete)

// USER USER RESTFULL
router.get('/user',userController.list)
router.get('/user/:id',userController.detail)
router.post('/user',upload.single('image'),userController.add)
router.put('/user/:id',upload.single('image'),userController.update)
router.delete('/user/:id',userController.delete)

// SALES TRANSACTION
router.post('/sales',salesTransactionController.processTransaction)




module.exports = router