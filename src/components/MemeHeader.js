
import troll_image from "../images/troll-face.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <section className="navbar--info">
                <img src={troll_image} alt="Troll Face" className="nav--logo" />
                <h3>Meme Generator</h3>
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
  
  