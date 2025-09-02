import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import Navbar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  text: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col mb-3">
            <Navbar onSearch={(text) => setGameQuery({ ...gameQuery, text })} />
          </div>
        </div>
        <div className="row">
          <div className="col-2 d-none d-lg-block">
            <GenreList
              selectedGenreId={gameQuery.genreId}
              setGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </div>
          <div className="col px-5">
            <div className="ps-2">
              <GameHeading gameObject={gameQuery} />
              <div className="d-flex mb-4 pt-3">
                <PlatformSelector
                  selectedPlatformId={gameQuery.platformId}
                  selectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platformId: platform.id })
                  }
                />
                <SortSelector
                  sortOrder={gameQuery.sortOrder}
                  onSelectSortOrder={(sortOrder) =>
                    setGameQuery({ ...gameQuery, sortOrder })
                  }
                />
              </div>
            </div>
            <GameGrid gameQuery={gameQuery} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
