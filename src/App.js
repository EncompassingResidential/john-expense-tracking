// import './components/MemeApp.css';
import './components/DiaryApp.css';

import DiaryHeader from './components/DiaryHeader.js'
import DiaryMainContent from './components/DiaryMainContent.js'

// import MemeHeader from './components/MemeHeader.js'
// import MemeMainContent from './components/MemeMainContent.js'

import React from 'react';

// All React coding goes in the src directory.

// <MemeHeader />
// <MemeMainContent />

export default function App() {
  return (
    <div className="app--main">
      <DiaryHeader />
      <DiaryMainContent />
    </div>
  )
}
