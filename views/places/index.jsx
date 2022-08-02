const React = require('react')
// const places = require('../../models/places')
const Def = require('../default')


function index(data) {
    console.log(data)
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-6">
                <h2>
                    <a href={`/places/${place.id}`} >
                        {place.name}
                    </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} />
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}


module.exports = index