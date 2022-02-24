import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.js'
import MainDiary from './MainContent.js'

import './App.css';

// All React coding goes in the src directory.

function App() {
  return (
    <div className="app--main">
      <Header />
      <MainDiary />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("rootExpenseTrackerApp")
);
