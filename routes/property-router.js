const express = require('express')

const PropertyCtrl = require('../controllers/property-ctrl')

const router = express.Router()

router.post('/property', PropertyCtrl.createProperty)
// router.put('/property/:id', PropertyCtrl.updateProperty)
router.get('/propertys/quicksort/suburb', PropertyCtrl.quickSortPropertysBySuburb)
router.get('/propertys/quicksort/price', PropertyCtrl.quickSortPropertysByPrice)
router.get('/propertys/all', PropertyCtrl.getPropertys)

module.exports = router