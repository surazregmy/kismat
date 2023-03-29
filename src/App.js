import "./App.css";
import KismatBoka from "../src/img/kismat.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={KismatBoka} className="App-logo" alt="logo" />
        <br></br>
        <p>Ma Ekdam thulo boka ho! Maile Kt haru lai esari nai ghumauxu</p>
        <p>Malai Esma gali garnu hola</p>
        <a
          className="App-link"
          href="https://www.facebook.com/kismath.pantha.9"
          target="_blank"
          rel="noopener noreferrer"
        >
          facebook
        </a>
      </header>
    </div>
  );
}

export default App;
