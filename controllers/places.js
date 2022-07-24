const router = require('express').Router()

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

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

router.get('/', (req, res) => {

})
//new route
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id] })
    }

    res.render('places/index', { places })
})



module.exports = router