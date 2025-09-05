import { Link } from "react-router-dom";
import navbar from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import SwitchColorMode from "./SwitchColorMode";

const Navbar = () => {
  return (
    <div className="d-flex align-items-center px-3">
      <Link to={"/"}>
        <img src={navbar} className="img-fluid" width="60px" />
      </Link>
      <SearchInput />
      <SwitchColorMode />
    </div>
  );
};

export default Navbar;
