import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { error, data } = useGenres();
  return (
    <>
      {error && <div className="text-danger">{error}</div>}
      <ul className="list-unstyled">
        {data.map((genre) => (
          <div className="d-flex align-items-center mb-2" key={genre.id}>
            <img
              className="rounded me-2"
              width="36px"
              height="36px"
              src={genre.image_background}
            />
            <div>{genre.name}</div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
