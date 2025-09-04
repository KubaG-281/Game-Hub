import { useRef } from "react";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const searchInput = useRef<HTMLInputElement>(null);

  return (
    <div className="input-group px-4">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (searchInput.current) setSearchText(searchInput.current.value);
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
