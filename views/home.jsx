const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className='button-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home