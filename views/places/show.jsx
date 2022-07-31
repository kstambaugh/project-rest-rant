const { stringify } = require('postcss')
const React = require('react')
const Def = require('../default')

function showDetails(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <h3>Rating</h3>
                <p>{data.place.rating}</p>
                <img src={data.place.pic} alt={data.place.name} />
                <p><span>{data.place.city}, </span><span>{data.place.state}</span></p>
                <p>{data.place.cuisines}</p>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                    {console.log('show.jsx testing', (data.id))}
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

module.exports = showDetails