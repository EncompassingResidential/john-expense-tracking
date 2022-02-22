
import earth_image from "./images/earth_image.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={earth_image} alt="Travel the Earth" className="nav--logo" />
            <p>My Travel Diary</p>
        </nav>
    )
}


export default function Header() {
    return (
    <div>
       <Navbar />
    </div>
    )
  }
  
  