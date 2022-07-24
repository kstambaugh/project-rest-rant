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

router.get('/new', (req, res) => {
    res.render('places/new')
})
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST/places')
})


module.exports = router