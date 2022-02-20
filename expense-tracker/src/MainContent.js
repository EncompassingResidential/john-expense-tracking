import React from 'react';
import ReactDOM from 'react-dom';

import online_experience_1_Image_path from "./images/katie-zaferes.png";
import online_experience_2_Image_path from "./images/Wedding_Photography.png";
import online_experience_3_Image_path from "./images/Mountain_Biking.png";

import star_image from "./images/star.png";

function Experience_Item(props) {
  return (
    <div className="card">
      <img src={props.image} className="card--image" />
      <div className="card--stats">
        <img src={star_image} className="star--image" />
        <span>{props.score} </span>
        <span className="gray">({props.number}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.Experience_Description}</p>
      <p><span className="bold">From ${props.money_amount}</span> / person</p>
    </div>
  )
}

export default function Card() {
    return (
      <main>
        <div className="experience--grid">
          <Experience_Item
            image={online_experience_1_Image_path}
            score="5.0"
            number="4"
            country="USA"
            Experience_Description="Life Lessons with Katie Zaferes"
            money_amount="136"
          />
          <Experience_Item 
            image={online_experience_2_Image_path}
            score="5.0"
            number="30"
            country="USA"
            Experience_Description="Learn wedding photography"
            money_amount="125"
          />
          <Experience_Item 
            image={online_experience_3_Image_path}
            score="4.8"
            number="2"
            country="USA"
            Experience_Description="Group Mountain Biking"
            money_amount="50"
          />
        </div>
      </main>
    )
  }
  