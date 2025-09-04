import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1>Oops</h1>
        <div>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured."}
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
