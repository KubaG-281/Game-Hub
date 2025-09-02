import type { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import { usePlatforms } from "../hooks/usePlatforms";

interface Props {
  gameObject: GameQuery;
}

const GameHeading = ({ gameObject }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find((g) => gameObject.genreId === g.id);

  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find(
    (p) => p.id === gameObject.platformId
  );

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;
  return <h1 className="fs-1">{heading}</h1>;
};

export default GameHeading;
