import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Navbar />
          </div>
        </div>
        <div className="row">
          <div className="col d-none d-lg-block bg-danger">Aside</div>
          <div className="col  bg-success">Main</div>
        </div>
      </div>
    </>
  );
}

export default App;
