
import earth_image from "../images/earth_image.png";

export default function ExpensesHeader() {
    return (
    <div>
        <header className="header">
            <img 
            src={earth_image} 
            className="header--image"
            />
            <h2 className="header--title">Expense Tracker App Started 3/02/2022</h2>
            <h4 className="header--project">React Course - Project 3 @ 12:21 pm</h4>
        </header>
    </div>
    )
  }
