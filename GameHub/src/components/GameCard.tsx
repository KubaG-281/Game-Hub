import { type Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="card">
      <img src={game.background_image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        <p className="card-text"></p>
      </div>
    </div>
  );
};

export default GameCard;
