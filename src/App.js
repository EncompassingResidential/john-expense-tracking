
import './components/expensesApp.css';
import ExpensesHeader from './components/ExpensesHeader.js'
import ExpensesMainContent from './components/ExpensesMainContent.js'

// import background from "./images/NC_Home.JPG";
// style={{ backgroundImage: `url("https://picsum.photos/300/10")` }}
// style={{ backgroundImage: `url(${background})` }}

import React from 'react';

/*
<div className="app--main"
            style={{ backgroundImage: `url(${background})` }}
      >
*/

export default function App() {
  return (
    <div className="app--main"
      style={{ backgroundImage: `url("https://picsum.photos/300/10")` }}
    >
      <ExpensesHeader />
      <ExpensesMainContent />
    </div>
  )
}
