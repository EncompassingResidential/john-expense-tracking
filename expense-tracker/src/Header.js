import logo from './images/logo.svg';

// Works "../src/logo192moved.png"
import airBnB_Image_path from "./images/airbnb-logo.png";
import Online_Experiences_Image_path from "./images/photo-grid.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={airBnB_Image_path} className="nav--logo" />
        </nav>
    )
}


function Hero() {
    return (
        <section>
            <img src={Online_Experiences_Image_path} className="hero--photo" />
            <h1 className="hero--header">Online Experiences 2/19/22</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
        </section>
    )
}

export default function Header() {
    return (
    <div>
       <Navbar />
       <Hero />
    </div>
    )
  }
  
  