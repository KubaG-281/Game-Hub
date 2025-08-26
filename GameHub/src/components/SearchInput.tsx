import { useRef } from "react";

interface Props {
  onSearch: (text: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchInput = useRef<HTMLInputElement>(null);

  return (
    <div className="input-group px-4">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (searchInput.current) onSearch(searchInput.current.value);
        }}
      >
        <input
          ref={searchInput}
          type="text"
          className="form-control rounded-pill"
          placeholder="Search games..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </form>
    </div>
  );
};

export default SearchInput;
