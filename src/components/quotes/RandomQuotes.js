import React from 'react'

const RandomQuotes = ({ getRandomQuotes, randomQuotes }) => {
    return (
        <div className="randomButton">
            <button onClick={getRandomQuotes}>Get random quotes</button>
            <h3>{randomQuotes}</h3>

        </div>
    )
}

export default RandomQuotes
