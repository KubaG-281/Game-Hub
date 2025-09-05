import { useRef } from "react";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const navigate = useNavigate();

  const searchInput = useRef<HTMLInputElement>(null);

  return (
    <div className="input-group px-4">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (searchInput.current) {
            setSearchText(searchInput.current.value);
            navigate("/");
          }
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
