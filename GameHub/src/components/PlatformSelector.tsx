import { usePlatforms, type Platform } from "../hooks/usePlatforms";

interface Props {
  selectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ selectPlatform, selectedPlatformId }: Props) => {
  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find((p) => p.id === selectedPlatformId);

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
              onClick={() => selectPlatform(platform)}
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
