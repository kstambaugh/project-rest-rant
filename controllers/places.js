const router = require('express').Router()
const db = require('../models')


//index
router.get('/', (req, res) => {
    console.log('trying to get index')
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log('index get error', err, 'this is db.Place', db.Place)
            res.render('error404')
        })
    // res.send('GET /places stub')
})

//post
router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('post err', err)
            res.render('error404')
        })
    // res.send('POST /places stub')
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
    // res.send('GET /places/:id stub')
})

router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
    res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router









// router.get('/', (req, res) => {
//     res.render('places/index', { places })
// })
// //new route
// router.get('/new', (req, res) => {
//     res.render('places/new')
// })

// router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error 404')
//     } else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         res.render('places/edit', { place: places[id], id })
//     }
// })

// router.post('/', (req, res) => {
//     if (!req.body.pic) {
//         req.body.pic = 'http://placekitten.com/400/400'
//     }
//     if (!req.body.city) {
//         req.body.city = 'Anytown'
//     }
//     if (!req.body.state) {
//         req.body.state = 'VA'
//     }
//     places.push(req.body)
//     res.redirect('/places')
// })

// router.put('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     console.log('put path troubleshoot', req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         if (!req.body.pic) {
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if (!req.body.city) {
//             req.body.city = 'Anytown'
//         }
//         if (!req.body.state) {
//             req.body.state = 'USA'
//         }

//         places[id] = req.body
//         res.redirect(`/places/${id}`)
//     }
// })


// router.get('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     console.log('get path for id', id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         res.render('places/show', { place: places[id], id })
//     }
// })

// router.delete('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//         places.splice(id, 1)
//         res.redirect('/places')
//     }
// })


// module.exports = router