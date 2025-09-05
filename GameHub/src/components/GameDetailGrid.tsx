import type { Game } from "../entities/Game";
import CardCriticScore from "./CardCriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameDetailGrid = ({ game }: Props) => {
  return (
    <>
      <div className="row my-3">
        <div className="col">
          <DefinitionItem term="Platforms">
            {game.parent_platforms.map(({ platform }) => (
              <div key={platform.id}>{platform.name}</div>
            ))}
          </DefinitionItem>
        </div>
        <div className="col">
          <DefinitionItem term="Metascore">
            <CardCriticScore criticScore={game.metacritic} />
          </DefinitionItem>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <DefinitionItem term="Genres">
            {game.genres.map((g) => (
              <div key={g.id}>{g.name}</div>
            ))}
          </DefinitionItem>
        </div>
        <div className="col">
          <DefinitionItem term="Publishers">
            {game.publishers.map((p) => (
              <div key={p.id}>{p.name}</div>
            ))}
          </DefinitionItem>
        </div>
      </div>
    </>
  );
};

export default GameDetailGrid;
