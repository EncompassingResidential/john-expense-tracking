import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.js'

import './App.css';

// All React coding goes in the src directory.

function MainContent() {
  return (
    <main>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}


function App() {
  return (
    <div class="header-main">
      <Header />
      <MainContent />
    </div>
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
