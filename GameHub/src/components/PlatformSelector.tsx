import usePlatform from "../hooks/usePlatform";
import { usePlatforms } from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const platform = usePlatform(platformId);

  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <div className="dropdown mb-3 me-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {platform?.name || "Platforms"}
      </button>
      <ul className="dropdown-menu">
        {data?.results.map((platform) => (
          <li key={platform.id}>
            <button
              onClick={() => setPlatformId(platform.id)}
              className="dropdown-item"
            >
              {platform.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlatformSelector;
