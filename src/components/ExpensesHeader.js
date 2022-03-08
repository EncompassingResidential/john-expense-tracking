
import earth_image from "../images/earth_image.png";

export default function ExpensesHeader() {
    return (
    <div className="expense--header">
            <img className="header--image" src={earth_image} alt="" />
            <h2 className="header--title">Expense Tracker App</h2>
            <h4 className="header--project">SDMM Project 4 Version 3/02/22</h4>
    </div>
    )
  }
