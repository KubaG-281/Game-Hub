import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/NavBar";
import { type Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
            <GenreList
              selectedGenre={selectedGenre}
              setGenre={(genre) => setSelectedGenre(genre)}
            />
          </div>
          <div className="col">
            <GameGrid selectedGenre={selectedGenre} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
