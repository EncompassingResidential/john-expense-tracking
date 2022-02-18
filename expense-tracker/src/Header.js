import logo from './logo.svg';

// Works "../src/logo192moved.png"
import img_path from "../src/logo192moved.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={img_path} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
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
  
  