import React from 'react';
// import ReactDOM from 'react-dom';

import data from "./data.js";

// import earth_image from "./images/earth_image.png";

// 😱 img src Works after moving src/images folder to public/images

function DiaryCard(props) {
  console.log(props)

  let imageToPrint
  (props.imageUrl.search("http") >= 0) ? imageToPrint = props.imageUrl : imageToPrint = `./images/${props.imageUrl}`

  return (
    <>
      <div>Tell me more 2:32 pm 11:23 am</div>
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
  