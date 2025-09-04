import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
