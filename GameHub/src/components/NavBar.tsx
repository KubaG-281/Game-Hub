import navbar from "../assets/logo.webp";
import SwitchColorMode from "./SwitchColorMode";

const Navbar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <img src={navbar} className="img-fluid" width="60px" />

      <SwitchColorMode />
    </div>
  );
};

export default Navbar;
