import navbar from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import SwitchColorMode from "./SwitchColorMode";

const Navbar = () => {
  return (
    <div className="d-flex align-items-center ">
      <img src={navbar} className="img-fluid" width="60px" />
      <SearchInput />
      <SwitchColorMode />
    </div>
  );
};

export default Navbar;
