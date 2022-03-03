
import './components/expensesApp.css';
import ExpensesHeader from './components/ExpensesHeader.js'
import ExpensesMainContent from './components/ExpensesMainContent.js'
import background from "./images/NC_Home.JPG";
// style={{ backgroundImage: `url("https://via.placeholder.com/500")` }}
// style={{ backgroundImage: `url(${background})` }}

import React, { useState} from 'react';

// All React coding goes in the src directory.

/*
<div className="app--main"
            style={{ backgroundImage: `url(${background})` }}
      >
*/

export default function App() {
  return (
    <div className="app--main">      
      <ExpensesHeader />
      <ExpensesMainContent />
    </div>
  )
}
