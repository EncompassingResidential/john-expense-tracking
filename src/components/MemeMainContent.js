import React from 'react';

import memesData from './memesData.js'

export default function MemeMainContent() {
    function handleClick() {
        console.log("handleClick @ " + Date.now())
    }

    function handleMouseOver() {
        console.log("handleMouseOver @ " + Date.now())
    }

    function handleFocus() {
        console.log("handleFocus @ " + Date.now())
    }

    return (
        <main>
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
                    onClick={handleClick}
                    onMouseOver={handleMouseOver}
                    onFocus={handleFocus}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}