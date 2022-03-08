
import troll_image from "../images/troll-face.png";

export default function Header() {
    return (
    <div>
        <header className="header">
            <img 
            src={troll_image} 
            className="header--image"
            />
            <h2 className="header--title">Meme Generator Started 2/24/2022</h2>
            <h4 className="header--project">React Course - Project 3 @ 2:08 pm</h4>
        </header>
    </div>
    )
  }
