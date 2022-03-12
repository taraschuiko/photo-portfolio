import "./index.css";
import Gallery from "../Gallery";
import me from "../../assets/me.jpg";

function App() {
  return (
    <div className="App">
      <h1>Taras Chuiko</h1>
      <span>Photography</span>
      <img src={me} alt="Taras Chuiko" width="100%" />
      <Gallery />
    </div>
  );
}

export default App;
