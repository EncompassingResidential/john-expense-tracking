import React from 'react';
import ReactDOM from 'react-dom';


export default function ReactArrayStuff() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        // We'll work on this next
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => 
        <p key={thing} className="thing--item">
            {thing}
        </p>
    )
    
    return (
        <div>
            <button onClick={addItem}>Add a Thing</button>
            <div className="thing--list">
                {thingsElements}
            </div>
        </div>
    )
}
