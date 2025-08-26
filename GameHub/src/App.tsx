import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/NavBar";
import { type Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { type Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
            <PlatformSelector
            selectedPlatform={selectedPlatform}
              selectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <GameGrid
              selectedPlatform={selectedPlatform}
              selectedGenre={selectedGenre}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
