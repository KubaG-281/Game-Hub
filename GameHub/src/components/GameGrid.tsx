import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <div className="text-danger">{error}</div>}
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {games.map((game) => (
            <div key={game.id}>
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameGrid;
