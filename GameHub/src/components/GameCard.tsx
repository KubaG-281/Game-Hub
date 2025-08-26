import type { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/imageUrl";
import CardCriticScore from "./CardCriticScore";
import Emoji from "./Emoji";
import PlatformListIcon from "./PlatformListIcon";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <div className="card h-100 carborder border-grey">
      <img
        src={getCroppedImageUrl(game.background_image)}
        className="card-img-top"
      />
      <div className="card-body">
        <div className="d-flex justify-content-between card-text mb-2">
          <PlatformListIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CardCriticScore criticScore={game.metacritic} />
        </div>
        <h5 className="card-title">{game.name}</h5>
        <Emoji rating={game.rating_top} />
      </div>
    </div>
  );
};

export default GameCard;
