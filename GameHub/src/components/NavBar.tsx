import navbar from "../assets/logo.webp";

const Navbar = () => {
  return (
    <div className="d-flex align-items-center">
      <img src={navbar} className="img-fluid" width="60px" />
      <div>NavBar</div>
    </div>
  );
};

export default Navbar;
