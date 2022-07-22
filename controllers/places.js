const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'The Fuzzy Pumpkin',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Witches Brew',
        pic: '/images/pumpkinsoup.png'
    }, {
        name: 'Meat Your Veggies',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Meat',
        pic: '/images/banana.png'
    }]
    res.render('places/index', { places })
})

module.exports = router