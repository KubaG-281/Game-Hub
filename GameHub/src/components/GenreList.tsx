import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { error, data } = useGenres();
  return (
    <>
      {error && <div className="text-danger">{error}</div>}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
