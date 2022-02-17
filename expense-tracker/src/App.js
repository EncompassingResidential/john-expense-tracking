import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

// Works "../src/logo192moved.png"
import img_path from "../src/logo192moved.png";

const img_width = "100px";

// All React coding goes in the src directory.
/*
From Scrimba React
  <MyAwesomeNavBar  />
   <MainContent />

*/

function MainContent() {
  return (
    <div>
     <h1>MainContent Here</h1>
     <h3>React function names are Case SenSITIVE.  When I change a React function name's first character from Upper Case to lower case the function disappears, but does not create a compile error.</h3>
     React calls this Composable.
     <h3>React is Declarative.  Vanilla Javascript is Imperative</h3>
     </div>
  )
}

const element = (
  <h1 className="header">This is JSX 2/15/22 4:03 pm {Date.now()}</h1>
)
console.log(JSON.stringify(element))

function TemporaryName() {
  return (
  <div>
    <img src={img_path} width={img_width} />
    <h6>img_path</h6>
    <h1>Fun facts about React</h1>
    <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Waike</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>

  </div>
  )
}

ReactDOM.render(
  <TemporaryName />,

  /* This doesn't work
  TemporaryName()
   <Navbar />,
   */
  document.getElementById("rootExpenseTrackerApp")
);


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h1>Bob's Bistro</h1>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">Menu</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
    )
}