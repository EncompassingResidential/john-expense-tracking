import React from 'react';
// import ReactDOM from 'react-dom';

import data from "./data.js";

import flag_image from "./images/map_flag_pngguru.png";

// 😱 img src Works after moving src/images folder to public/images

function DiaryCard(props) {
  console.log(props)

  let imageToPrint
  (props.imageUrl.search("http") >= 0) ? imageToPrint = props.imageUrl : imageToPrint = `./images/${props.imageUrl}`

  return (
    <>
      <div className="diary--entry">
        
        <img src={imageToPrint} alt="This Description" className="diary--image" />
        <div className="diary--information">
          <div className="diary--topDetails">
            <img src={flag_image} alt="Where in the world" className="flag--image" />
            <p>{props.location}</p>
            <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
          </div>
          <div className="diary--bottomDetails">
            <p>{props.title}</p>
            <p>{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
          </div>
        </div>
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
  