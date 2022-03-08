import { Card } from 'react-bootstrap'

import earth_image from "../images/earth_image.png";

export default function ExpensesHeader() {
    return (
    <Card >
        <header className="header">
            <img 
            src={earth_image} 
            className="header--image"
            />
            <h2 className="header--title">Expense Tracker App</h2>
            <h4 className="header--project">SDMM Project 4 Version 3/02/22</h4>
        </header>
    </Card>
    )
  }
