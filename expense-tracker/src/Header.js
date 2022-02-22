
import earth_image from "./images/earth_image.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={earth_image} alt="Travel the Earth" className="nav--logo" />
            <p>This should be here</p>
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
  
  