interface Props {
  criticScore: number;
}

const CardCriticScore = ({ criticScore }: Props) => {
  return (
    <span
      className={`border border-2 border-grey px-2 rounded ${
        criticScore > 80 ? "bg-success" : "bg-danger"
      }`}
    >
      {criticScore}
    </span>
  );
};

export default CardCriticScore;
