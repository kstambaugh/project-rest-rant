const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: String,
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

// const mySchema = mongoose.model('Place', placeSchema)

// module.exports = mySchema

// module.exports = [{
//     name: 'The Fuzzy Pumpkin',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Witches Brew',
//     rating: 'not rated',
//     pic: '/images/pumpkinsoup.png'
// }, {
//     name: 'Meat Your Veggies',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Meat',
//     rating: 'not rated',
//     pic: '/images/banana.png'
// }]


