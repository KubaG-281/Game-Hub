import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <div className="text-danger">{error}</div>}
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {isLoading &&
            skeletons.map((s) => (
              <div className="col">
                <GameCardSkeleton key={s} />
              </div>
            ))}
          {games.map((game) => (
            <div className="col" key={game.id}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
