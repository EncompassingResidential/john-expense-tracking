import React from 'react';
// import ReactDOM from 'react-dom';

import data from "./data.js";

import star_image from "./images/star.png";

// img src Works after moving src/images folder to public/images
function ExperienceItem(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`./images/${props.image}`} alt={props.Experience_Description} className="card--image" />
      <div className="card--stats">
        <img src={star_image} alt="Favorite" className="star--image" />
        <span>{props.score} </span>
        <span className="gray">({props.number}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.Experience_Description}</p>
      <p><span className="bold">From ${props.money_amount}</span> / person</p>
    </div>
  )
}

export default function Card() {
  // <Hero />

  const cards = data.map(item => {
      return (
        <ExperienceItem
        key={item.id}
        image={item.coverImg}
        score={item.stats.rating}
        number={item.stats.reviewCount}
        location={item.location}
        Experience_Description={item.title}
        money_amount={item.price}
        openSpots={item.openSpots}
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
  