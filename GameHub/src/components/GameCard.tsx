import { type Game, type Platform } from "../hooks/useGames";
import PlatformListIcon from "./PlatformListIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="card">
      <img src={game.background_image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        <div className="card-text">
          <PlatformListIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
