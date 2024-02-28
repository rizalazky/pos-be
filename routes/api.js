const express= require('express')
const router = express.Router();
const categoryController = require('../controllers/productCategoryController');
const unitController = require('../controllers/productUnitController');
const productController = require('../controllers/productController');

router.get('/',(req,res)=>{
    res.send('Hello API')
})
// CATEGORY PRODUCT RESTFULL
router.get('/category',categoryController.list)
router.post('/category',categoryController.add)
router.put('/category/:id',categoryController.update)
router.delete('/category/:id',categoryController.delete)

// UNII PRODUCT RESTFULL
router.get('/unit',unitController.list)
router.post('/unit',unitController.add)
router.put('/unit/:id',unitController.update)
router.delete('/unit/:id',unitController.delete)


// UNII PRODUCT RESTFULL
router.get('/product',productController.list)
router.post('/product',productController.add)
router.put('/product/:id',productController.update)
router.delete('/product/:id',productController.delete)



module.exports = router