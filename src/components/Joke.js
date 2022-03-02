import React from "react"

import jokesData from "./jokesData.js"

function JokeParts(props) {
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
            Setup 7 {props.setup && <h3>{props.setup}</h3>}
            <section>Punchline <button onClick={toggleShown} >{isShown ? "Hide" : "Show"} Punchline</button> {isShown && <p>{props.punchline}</p>}</section>
            
            <hr />
        </div>
    )
}

export default function Joke() {

    const jokeElements = jokesData.map(joke => 
        <JokeParts 
            key={joke.id}
            id={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline}
            />
        )

    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    return (
        <div>
            {jokeElements}
        </div>
    )
}