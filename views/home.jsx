const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <a href="/places">
                    <button className='button-primary'>Places Page</button>
                    <div>
                        <img src="/images/wafflecone.png" alt="wafflecone" />
                        <p>Photo by <a href="https://unsplash.com/@uniqueton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anton</a> on <a href="https://unsplash.com/s/photos/waffle-free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                    </div>
                </a>
            </main>
        </Def>
    )
}

module.exports = home