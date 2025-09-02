import React from "react";
import type { GameQuery } from "../App";
import useGames from "../hooks/useGames";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <h3 className="text-danger">{error.message}</h3>;

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {isLoading
          ? skeletons.map((s) => (
              <div key={s} className="col">
                <GameCardSkeleton />
              </div>
            ))
          : data?.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.results.map((game) => (
                  <div className="col" key={game.id}>
                    <GameCard game={game} />
                  </div>
                ))}
              </React.Fragment>
            ))}
      </div>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="btn btn-secondary my-3"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default GameGrid;
