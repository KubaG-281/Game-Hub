import "./App.css";
import GameGrid from "./components/GameGrid";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col d-none d-lg-block">Aside</div>
          <div className="col">
            <GameGrid />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
