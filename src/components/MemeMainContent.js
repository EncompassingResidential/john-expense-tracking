import React from 'react';

import memesData from './memesData.js'

// import ReactArrayStuff from './ReactArrayStuff.js'
//    <div>
//        <ReactArrayStuff />
//    </div>

// import SquareElements from './SquareElements.js'
//    <div>
//        <SquareElements />
//    </div>

import './joke.css';
import Joke from './Joke.js'

export default function MemeMainContent() {

    let [urlString, setUrlString] = React.useState("http://i.imgflip.com/1bij.jpg")

    let [topTextInput, setTopTextInput] = React.useState(document.getElementById("top_text_input"))
    let [bottomTextInput, setBottomTextInput] = React.useState(document.getElementById("bottom_text_input"))
    let [topTextId, setTopTextId] = React.useState(document.getElementById("top_text_id"))
    let [bottomTextElementId, setBottomTextElementId] = React.useState(document.getElementById("bottom_text_id"))

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {

        setUrlString(oldValue => {
           const memesArray = allMemeImages.data.memes
           const randomNumber = Math.floor(Math.random() * memesArray.length)
           const url = memesArray[randomNumber].url

           setMeme(prevMeme => ({
               ...prevMeme,
               randomImage: url
           }))
           
        })

/*        setTopTextElementId(oldTopTextElementID => {
    oldTopTextElementID.setContext
}) */
    }
    
    return (
        <main>
            <div>
                <Joke />
            </div>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    id="top_text_input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    id="bottom_text_input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="image--container">
                <p>{urlString} </p>
                <img 
                    src={meme.randomImage}
                    className="meme--image"
                />
                <div className="top--text" id="top_text_id">Top Text</div>
                <div className="bottom--text" id="bottom_text_id">Bottom Text</div>
            </div>
        </main>
    )
}