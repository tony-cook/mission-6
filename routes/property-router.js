const express = require('express')

const PropertyCtrl = require('../controllers/property-ctrl')

const router = express.Router()

router.post('/property', PropertyCtrl.createProperty)
// router.put('/property/:id', PropertyCtrl.updateProperty)
router.get('/property/quicksortsuburb', PropertyCtrl.quickSortPropertysBySuburb)
router.get('/propertys/quicksortprice', PropertyCtrl.quickSortPropertysByPrice)
router.get('/propertys', PropertyCtrl.getPropertys)

module.exports = router