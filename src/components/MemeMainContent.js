import React from 'react';

import memesData from './memesData.js'

export default function MemeMainContent() {

    let url
    const [isImportant, setIsImportant] = React.useState("No")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)

        url = memesArray[randomNumber].url

        // This isImportant shows the previous value
        console.log("\nB4 isImportant Previous Value " + isImportant)

        /*  It changes the HTML to the current status of isImportant
            THEN it runs this setIsImportant() code.
            setIsImportant(function(oldValue) {
                let newString = ""
                if (oldValue === "Yes") 
                newString = "No"
                else {
                    newString = "Yes"
                }
                return ( newString );
            })
            */
           
        // Both of these setIsImportant work
        setIsImportant(oldValue => {
           let newString = ""
           if (oldValue === "Yes") 
                newString = "No"
            else {
                newString = "Yes"
            }
            return ( newString );
        })

        console.log("11:45 C5 isImportant Previous Value " + isImportant)

        console.log(url)
    }
    
    return (
        <main>
            <p>{url} </p>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼 11:59 am isImportant starts as +NoN Now is {isImportant}
                </button>
            </div>
        </main>
    )
}