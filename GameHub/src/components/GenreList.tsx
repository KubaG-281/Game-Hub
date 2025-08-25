import { BsFileEarmarkRichtext } from "react-icons/bs";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
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
