
import './components/expensesApp.css';
import ExpensesHeader from './components/ExpensesHeader.js'
import ExpensesMainContent from './components/ExpensesMainContent.js'

import { Card } from 'react-bootstrap'

import React from 'react';

export default function App() {
  return (
    <Card border="info">
      <ExpensesHeader />
      <ExpensesMainContent />
    </Card>
  )
}
