const SortSelector = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Order by: Relevance
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item">Relevance</button>
        </li>
        <li>
          <button className="dropdown-item">Date added</button>
        </li>
        <li>
          <button className="dropdown-item">Name</button>
        </li>
        <li>
          <button className="dropdown-item">Release date</button>
        </li>
        <li>
          <button className="dropdown-item">Popularity</button>
        </li>
        <li>
          <button className="dropdown-item">Average rating</button>
        </li>
      </ul>
    </div>
  );
};

export default SortSelector;
