import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/NavBar";
import { type Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { type Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre;
  platform: Platform;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
              selectedGenre={gameQuery.genre}
              setGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </div>
          <div className="col">
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              selectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <GameGrid gameQuery={gameQuery} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
