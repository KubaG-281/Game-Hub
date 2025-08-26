import navbar from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import SwitchColorMode from "./SwitchColorMode";

interface Props {
  onSearch: (text: string) => void;
}

const Navbar = ({onSearch}: Props) => {
  return (
    <div className="d-flex align-items-center ">
      <img src={navbar} className="img-fluid" width="60px" />
      <SearchInput onSearch={onSearch} />
      <SwitchColorMode />
    </div>
  );
};

export default Navbar;
