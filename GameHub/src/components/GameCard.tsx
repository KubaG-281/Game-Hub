import { type Game, type Platform } from "../hooks/useGames";
import CardCriticScore from "./CardCriticScore";
import PlatformListIcon from "./PlatformListIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="card border border-grey">
      <img src={game.background_image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        <div className="d-flex justify-content-between card-text">
          <PlatformListIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CardCriticScore criticScore={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
