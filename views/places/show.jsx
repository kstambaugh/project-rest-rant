const React = require('react')
const Def = require('../default')

function show(data) {
    console.log('this is the show data', data.place)
    let comments = (
        <h3 className='inactive'>
            No Comments Yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        < Def >
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
                <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
                <h2>Comments</h2>
                {comments}
                <h2>Got Your Own Rant Or Rave?</h2>
                <form method="POST" action={`/places/${data.place.id}/comment`}>
                    <div className='row'>
                        <div className='form-group'>
                            <label htmlFor='content'>Content</label>
                            <input className='form-control' type='text' id='content' name='content' required />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='author'>Author</label>
                            <input className='form-control' type='text' id='author' name='author' required />
                        </div>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='rant'>Rant?</label>
                            <input type='checkbox' id='rant' name='rant' />
                        </div>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='stars'>Stars</label>
                            <input className='form-control' type='number' step='5' id='stars' name='stars' required />
                        </div>
                    </div>

                    <input className='btn btn-primary' type="submit" value='Make Comment' />

                </form>
            </main>
        </Def >
    )
}

module.exports = show   