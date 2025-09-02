import type { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameObject: GameQuery;
}

const GameHeading = ({ gameObject }: Props) => {
  const genre = useGenre(gameObject.genreId);

  const platform = usePlatform(gameObject.platformId);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return <h1 className="fs-1">{heading}</h1>;
};

export default GameHeading;
