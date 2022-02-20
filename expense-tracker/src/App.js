import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.js'
import Card from './MainContent.js'

import './App.css';

// All React coding goes in the src directory.

function App() {
  return (
    <div class="header-main">
      <Header />
      <Card />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("rootExpenseTrackerApp")
);
