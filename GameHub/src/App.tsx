import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col mb-3">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col-2 d-none d-lg-block">
            <GenreList />
          </div>
          <div className="col px-5">
            <div className="ps-2">
              <GameHeading />
              <div className="d-flex mb-4 pt-3">
                <PlatformSelector />
                <SortSelector />
              </div>
            </div>
            <GameGrid />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
