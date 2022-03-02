import React from 'react';

import expensesData from './expensesData.js'

export default function ExpensesMainContent() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(expensesData)

    function handleChange(event) {
        const {name, value} = event.target

        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }

    function getMemeImage() {

        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
           
    }
    
    console.log("meme " + JSON.stringify(meme))
    // console.log("allMemeImages " + JSON.stringify(allMemeImages))
    
    return (
        <main>
            <div className="meme--form">
                <input 
                    className="form--input"
                    type="text"
                    placeholder="Top text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                    id="top_text_input"
                />
                <input 
                    className="form--input"
                    type="text"
                    placeholder="Bottom text"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                    id="bottom_text_input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼 Finished 3/02/2022
                </button>
            </div>
            <div className="image--container">
                <p>{meme.randomImage} </p>
                <img 
                    src={meme.randomImage}
                    className="meme--image"
                />
                <div className="meme--text top--text" id="top_text_id">{meme.topText}</div>
                <div className="meme--text bottom--text" id="bottom_text_id">{meme.bottomText}</div>
            </div>
        </main>
    )
}