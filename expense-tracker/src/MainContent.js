import React from 'react';
// import ReactDOM from 'react-dom';

import data from "./data.js";

import star_image from "./images/star.png";

// img src Works after moving src/images folder to public/images
function ExperienceItem(props) {
  return (
    <div className="card">
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
        image={item.coverImg}
        score={item.stats.rating}
        number={item.stats.reviewCount}
        location={item.location}
        Experience_Description={item.title}
        money_amount={item.price}
        />
      )
    }
  )
  return (
      <div className="experience--grid">
      {cards}
      </div>
    )
  }
  