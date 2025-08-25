import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { errors, genres } = useGenres();
  return (
    <>
      {errors && <div className="text-danger">{errors}</div>}
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
