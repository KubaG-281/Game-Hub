import useGames from "../hooks/useGames";
import type { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
} 

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, isLoading, error } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <div className="text-danger">{error}</div>}
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {isLoading
            ? skeletons.map((s) => (
                <div key={s} className="col">
                  <GameCardSkeleton />
                </div>
              ))
            : data.map((game) => (
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
