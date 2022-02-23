
import earth_image from "./images/earth_image.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <section className="navbar--info">
                <img src={earth_image} alt="Travel the Earth" className="nav--logo" />
                <p>My Travel Journal</p>
            </section>
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
  
  