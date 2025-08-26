import type { GameQuery } from "../App";

interface Props {
  gameObject: GameQuery;
}

const GameHeading = ({ gameObject }: Props) => {
  const heading = `${gameObject.genre?.name || ""} ${
    gameObject.platform?.name || ""
  } Games`;
  return <h1 className="fs-1">{heading}</h1>;
};

export default GameHeading;
