import React from 'react';
// import ReactDOM from 'react-dom';

import data from "./data.js";

import star_image from "./images/star.png";

// 😱 img src Works after moving src/images folder to public/images
function ExperienceItem(prop) {
  console.log(prop)
  let props = prop.item
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "2/22/22 SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`./images/${props.coverImg}`} alt={props.title} className="card--image" />
      <div className="card--stats">
        <img src={star_image} alt="Favorite" className="star--image" />
        <span>{props.stats.rating} </span>
        <span className="gray">({props.openSpots}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default function Card() {
  // <Hero />

  const cards = data.map(item => {
      return (
        <ExperienceItem
        key={item.id}
        item={item}
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
  