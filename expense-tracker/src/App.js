import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.js'

import logo from './logo.svg';
import './App.css';

// Works "../src/logo192moved.png"
import img_path from "../src/logo192moved.png";

const img_width = "100px";

// All React coding goes in the src directory.

function MainContent() {
  return (
    <div>
     <h1>MainContent Here</h1>
     <h3>React function names are Case SenSITIVE.  When I change a React function name's first character from Upper Case to lower case the function disappears, but does not create a compile error.</h3>
     React calls this Composable.
     <h3>React is Declarative.  Vanilla Javascript is Imperative</h3>
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


function App() {
  return (
    <>
      <Header />
      <MainContent />
    </>
  )
}

ReactDOM.render(
  <App />,

  /* This doesn't work
  TemporaryName()
   <Navbar />,
   */
  document.getElementById("rootExpenseTrackerApp")
);
