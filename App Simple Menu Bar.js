import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

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

ReactDOM.render(
  <Navbar />,
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