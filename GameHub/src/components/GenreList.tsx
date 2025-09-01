import useGenres, { type Genre } from "../hooks/useGenres";

interface Props {
  setGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ setGenre, selectedGenre }: Props) => {
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
                genre.id === selectedGenre?.id ? "fw-bold fs-5" : "fs-6"
              }
            `}
              onClick={() => {
                setGenre(genre);
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
