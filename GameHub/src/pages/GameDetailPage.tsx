import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameDetailGrid from "../components/GameDetailGrid";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <div>Loading...</div>;
  if (error || !game) throw error;

  return (
    <>
      <h1>{game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameDetailGrid game={game} />
    </>
  );
};

export default GameDetailPage;
