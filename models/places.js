const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'http://placekitten.com/350/350' },
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?!'],
        max: [new Date().getFullYear(), 'This is the future!']
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})


placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

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


