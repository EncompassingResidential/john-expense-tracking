import React from 'react';
import ReactDOM from 'react-dom';

import online_experience_1_Image_path from "./images/katie-zaferes.png";
import online_experience_2_Image_path from "./images/Wedding_Photography.png";
import online_experience_3_Image_path from "./images/Mountain_Biking.png";

import star_image from "./images/star.png";

function Experience_Item_1(item_image) {
  return (
    <div className="card">
      <img src={online_experience_1_Image_path} className="card--image" />
      <div className="card--stats">
        <img src={star_image} className="star--image" />
        <span>5.0</span>
        <span>(6) • </span>
        <span>USA</span>
      </div>
      <p>Text for Experience Item</p>
      <p>From $136 / person</p>
    </div>
  )
}

function Experience_Item_2(item_image) {
  return (
    <div className="card">
      <img src={online_experience_2_Image_path} className="card--image" />
      <div className="card--stats">
        <img src={star_image} className="star--image" />
        <span>5.0</span>
        <span>(30) • </span>
        <span>USA</span>
      </div >
      <p>Learn wedding photography</p>
      <p>From $money_amount / person</p>
    </div>
  )
}

function Experience_Item_3(item_image) {
  return (
    <div className="card">
      <img src={online_experience_3_Image_path} className="card--image" />
      <div className="card--stats">
        <img src={star_image} className="star--image" />
        <span>4.8</span>
        <span>(2) • </span>
        <span>USA</span>
      </div >
      <p>Group Mountain Biking</p>
      <p>From $money_amount / person</p>
    </div>
  )
}


export default function Card() {
    return (
      <main>
        <div className="experience--grid">
          <Experience_Item_1 />
          <Experience_Item_2 />
          <Experience_Item_3 />
        </div>
      </main>
    )
  }
  