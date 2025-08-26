import { usePlatforms } from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <div className="dropdown mb-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Platforms
      </button>
      <ul className="dropdown-menu">
        {data.map((platform) => (
          <li key={platform.id}>
            <button className="dropdown-item">{platform.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformSelector;
