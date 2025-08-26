import type { GameQuery } from "../App";
import useGames from "../hooks/useGames";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading, error } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <h3 className="text-danger">{error}</h3>;

  return (
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
  );
};

export default GameGrid;
