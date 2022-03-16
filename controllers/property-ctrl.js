const Property = require('../models/property-model')

createProperty = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a property',
        })
    }

    const property = new Property(body)

    if (!property) {
        return res.status(400).json({ success: false, error: err })
    }

    property
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: property._id,
                message: 'Property created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Property not created!',
            })
        })
}


quickSortPropertysBySuburb = async (req, res) => {
    const properties = await Property.find({})

    function quickSortSuburb (array) {
        if (array.length < 2) 
          return array;
        
        let pivotValue = array[0]
        let pivot = array[0]['suburb'];
        let left  = []; 
        let right = [];

        for (let i = 1; i < array.length; i++){
            if (array[i]['suburb'] < pivot)
                left.push(array[i]);
            else
                right.push(array[i]);
            }
            return [...quickSortSuburb(left),pivotValue,...quickSortSuburb(right)];
        };

        const result = quickSortSuburb(properties)

        return res.status(200).json({ success: true, data: result })

}

getPropertys = async (req, res) => {
    await Property.find({}, (err, property) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Property.length) {
            return res
                .status(404)
                .json({ success: false, error: `Property not found` })
        }

        return res.status(200).json({ success: true, data: property })
    }).clone().catch(err => console.log(err))
}

quickSortPropertysByPrice = async (req, res) => {
    const properties = await Property.find({})

    function quickSortPrice (array) {
        if (array.length < 2) 
          return array;
        
        let pivotValue = array[0]
        let pivot = array[0]['price'];
        let left  = []; 
        let right = [];

        for (let i = 1; i < array.length; i++){
            if (array[i]['price'] < pivot)
                left.push(array[i]);
            else
                right.push(array[i]);
            }
            return [...quickSortPrice(left),pivotValue,...quickSortPrice(right)];
        };

        const result = quickSortPrice(properties)

        return res.status(200).json({ success: true, data: result })

}

module.exports = {
    createProperty,
    getPropertys,
    quickSortPropertysByPrice,
    quickSortPropertysBySuburb
}
// updateMovie,
// deleteMovie,
// getMovies,
// getMovieById,