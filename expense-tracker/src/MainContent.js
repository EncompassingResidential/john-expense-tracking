import React from 'react';
// import ReactDOM from 'react-dom';

import data from "./data.js";

// import earth_image from "./images/earth_image.png";

// 😱 img src Works after moving src/images folder to public/images
/*
function DiaryCard(props) {
  // for pass in of item={item} you can create new Object let props = prop.item
  // for pass in of {...item} don't need reassign to new Object.

  // let ImageURL = ""
  let ImageURL = (props.imageUrl.search("http") >= 0) ? ImageURL = props.imageUrl : ImageURL = "./images/" + props.imageUrl

  return (
    <div className="card">
      <div>ImageURL !== "" && <div className="card--badge">ImageURL</div>
    </div>
  )
}
*/

function DiaryCard(props) {
  console.log(props)

  let imageToPrint
  (props.imageUrl.search("http") >= 0) ? imageToPrint = props.imageUrl : imageToPrint = `./images/${props.imageUrl}`

  return (
    <>
      <div>Tell me more 11:23 am</div>
      <div className="diary--entry">
        <p>Before Image {props.title}</p>
        <img src={imageToPrint} alt="This Description" className="diary--image" />
        
        <p>Image location {imageToPrint} is there. </p>
      </div>
    </>
  )
}

export default function MainDairy() {

  const cards = data.map(item => {
      return (
        <DiaryCard 
          key={item.id}
          {...item}
        />
      )
    }
  )

  return (
      <div className="experience--grid">
      <section className="card--stats">
        {cards}
      </section>
      </div>
    )
  }
  