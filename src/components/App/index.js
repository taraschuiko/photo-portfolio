import "./index.css";
import Gallery from "../Gallery";
import me from "../../assets/me.jpg";
import instagramIcon from "../../assets/icons/instagram.svg"
import pexelsIcon from "../../assets/icons/pexels.svg"
import unsplashIcon from "../../assets/icons/unsplash.svg"

function App() {
  return (
    <div className="App">
      <header className="header">
        <div>
          <h1>Taras Chuiko</h1>
          <span>Photography</span>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/taraschuiko/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.pexels.com/@taraschuiko" target="_blank" rel="noreferrer">
            <img src={pexelsIcon} alt="Pexels" />
          </a>
          <a href="https://unsplash.com/@taraschuiko" target="_blank" rel="noreferrer">
            <img src={unsplashIcon} alt="Unsplash" />
          </a>
        </div>
      </header>
      <img src={me} alt="Taras Chuiko" width="100%" />
      <Gallery />
    </div>
  );
}

export default App;
