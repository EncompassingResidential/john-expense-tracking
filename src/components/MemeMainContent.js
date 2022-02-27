import React from 'react';

import memesData from './memesData.js'

export default function MemeMainContent() {

    let [urlString, setUrlString] = React.useState("BlankURL.com")

    function getMemeImage() {

        setUrlString(oldValue => {
           let newUrl = ""

           const memesArray = memesData.data.memes
           const randomNumber = Math.floor(Math.random() * memesArray.length)
   
           newUrl = memesArray[randomNumber].url
           
           console.log("12:13 newUrl " + newUrl)

           return ( newUrl );
        })

    }
    
    return (
        <main>
            <p>{urlString} </p>
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
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}