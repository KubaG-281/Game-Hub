import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameGridScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return <div>Loading...</div>;

  if (error) throw error;

  return (
    <div className="row">
      {data?.results.map((s) => (
        <div key={s.id} className="col-sm-6">
          <img src={s.image} width="100%" />
        </div>
      ))}
    </div>
  );
};

export default GameGridScreenshots;
