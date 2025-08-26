interface Props {
  criticScore: number;
}

const CardCriticScore = ({ criticScore }: Props) => {
  return (
    <div
      className={`border border-2 border-grey ${
        criticScore > 80 ? "bg-success" : "bg-danger"
      } px-2 rounded`}
    >
      {criticScore}
    </div>
  );
};

export default CardCriticScore;
