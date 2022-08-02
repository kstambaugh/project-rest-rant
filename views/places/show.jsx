const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <h3>Rating</h3>
                <p>{data.place.rating}</p>

                <img src={data.place.pic} alt={data.place.name} />

                <p><span>{data.place.city}, </span><span>{data.place.state}</span></p>

                <h2>Description</h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>Serving {data.place.cuisines}</h4>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show   