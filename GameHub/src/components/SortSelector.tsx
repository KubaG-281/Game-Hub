interface Props {
  onSelectSortOrder: (value: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Order by: {currentSortOrder?.label || "Relevance"}
      </button>
      <ul className="dropdown-menu">
        {sortOrders.map((order) => (
          <li key={order.value}>
            <button
              onClick={() => onSelectSortOrder(order.value)}
              className="dropdown-item"
            >
              {order.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortSelector;
