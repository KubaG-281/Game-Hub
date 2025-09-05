import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameDetailGrid from "../components/GameDetailGrid";
import GameGridScreenshots from "../components/GameGridScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <div>Loading...</div>;

  if (error || !game) throw error;

  return (
    <div className="row">
      <div className="col-md-6">
        <h1>{game.name}</h1>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameDetailGrid game={game} />
      </div>
      <div className="col-md-6">
        <GameTrailer gameId={game.id} />
        <GameGridScreenshots gameId={game.id} />
      </div>
    </div>
  );
};

export default GameDetailPage;
