import './App.css';

import Header from './Header.js'
import MainDiary from './MainContent.js'

import React from 'react';

// All React coding goes in the src directory.

export default function App() {
  return (
    <div className="app--main">
      <Header />
      <MainDiary />
    </div>
  )
}
