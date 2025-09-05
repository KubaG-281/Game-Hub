import { Link } from "react-router-dom";
import type Game from "../entities/Game";
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
        <div>
          <Link
            className="fw-semibold fs-5 text-white link-secondary link-underline-opacity-0"
            to={`/games/${game.slug}`}
          >
            {game.name}
          </Link>
        </div>
        <Emoji rating={game.rating_top} />
      </div>
    </div>
  );
};

export default GameCard;
