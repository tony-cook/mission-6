const Property = require('../models/property-model');

createProperty = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.this.status(400).json({
      success: false,
      error: 'You must provide a property'
    });
  }

  const property = new Property(body);

  if (!property) {
    return res.status(400).json({ success: false, error: err });
  }

  property
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: property._id,
        message: 'Property created!'
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Property not created!'
      });
    });
};

updateProperty = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update'
    });
  }

  Property.findOne({ _id: req.params.id }, (err, property) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Property not found!'
      });
    }

    property = JSON.parse(JSON.stringify(body));

    property
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: property._id,
          message: 'Property updated!'
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Property not updated!'
        });
      });
  });
};

deleteProperty = async (req, res) => {
  await Property.findByIdAndDelete({ _id: req.params.id }, (err, property) => {
    if (err) {
      return req.status(400).json({ success: false, error: err });
    }

    if (!property) {
      return res.status(404).json({ success: false, error: 'Property not found' });
    }

    return res.status(200).json({ success: true, data: property });
  }).catch(err => console.log(err));
};

getPropertyById = async (req, res) => {
  await Property.findOne({ _id: req.params.id }, (err, property) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!property) {
      return res.status(404).json({ success: false, error: 'Property not found' });
    }

    return res.status(200).json({ success: true, data: property });
  }).catch(err => console.log(err));
};

getPropertys = async (req, res) => {
  await Property.find({}, (err, propertys) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!propertys.length) {
      return res.status(404).json({ success: false, error: 'Property not found' });
    }

    return res.status(200).json({ success: true, data: propertys });
  })
    .clone()
    .catch(err => console.log(err));
};

quickSortProperties = async (req, res) => {
  let sortKey = req.params.key;
  const properties = await Property.find({});

  function quickSort(array, key) {
    if (array.length < 2) return array;

    let pivotValue = array[0];
    let pivot = array[0][key];
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i][key] < pivot) left.push(array[i]);
      else right.push(array[i]);
    }
    return [...quickSort(left, key), pivotValue, ...quickSort(right, key)];
  }

  const result = quickSort(properties, sortKey);

  return res.status(200).json({ success: true, data: result });
};

module.exports = {
  createProperty,
  updateProperty,
  deleteProperty,
  getPropertys,
  getPropertyById,
  quickSortProperties
};
