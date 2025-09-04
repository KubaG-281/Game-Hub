import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreList = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  const { error, data, isLoading } = useGenres();

  if (error) return null;
  if (isLoading)
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  return (
    <>
      <h4 className="fw-bold mb-3">Genres</h4>
      <ul className="list-unstyled">
        {data?.results.map((genre) => (
          <div className={"d-flex align-items-center mb-2 "} key={genre.id}>
            <img
              className="rounded me-2 object-fit-cover"
              width="36px"
              height="36px"
              src={genre.image_background}
            />
            <div
              className={`genre-text ${
                genre.id === genreId ? "fw-bold fs-5" : "fs-6"
              }
            `}
              onClick={() => {
                setGenreId(genre.id);
              }}
            >
              {genre.name}
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
