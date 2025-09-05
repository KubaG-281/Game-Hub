import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
