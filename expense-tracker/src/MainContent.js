import React from 'react';
// import ReactDOM from 'react-dom';

import online_experience_1_Image_path from "./images/katie-zaferes.png";
import online_experience_2_Image_path from "./images/Wedding_Photography.png";
import online_experience_3_Image_path from "./images/Mountain_Biking.png";

import star_image from "./images/star.png";

/*
These didn't work!
const experience_1_Image_path = "katie-zaferes.png";

When I did a log of:
{`../images/${props.image}`}

for these const variable strings it returned: ../images/Wedding_Photography.png

which is the correct file system path, but in my local React instance it didn't work.


These import statements worked:

import online_experience_1_Image_path from "./images/katie-zaferes.png";

<ExperienceItem
  image={online_experience_1_Image_path}
/>

When I did a log of:
function ExperienceItem(props) {
{`${props.image}`}

for these import variable strings it returned: //static/media/katie-zaferes.8c39a93af3d2de2b3c27

The import statements in the local React instance are creating 
   the proper directory and file names.

*/

function ExperienceItem(props) {
  return (
    <div className="card">
      <img src={`${props.image}`} alt={props.Experience_Description} className="card--image" />
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
    return (
      <main>
        <div className="experience--grid">
          <ExperienceItem
            image={online_experience_1_Image_path}
            score="5.0"
            number="4"
            country="USA"
            Experience_Description="Life Lessons with Katie Zaferes"
            money_amount="136"
          />
          <ExperienceItem 
            image={online_experience_2_Image_path}
            score={5.2} // For number instead of string do format as {5.0}
            number="30"
            country="USA"
            Experience_Description="Learn wedding photography"
            money_amount="125"
          />
          <ExperienceItem 
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
  