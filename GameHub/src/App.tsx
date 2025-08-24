import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-primary">Navbar</div>
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
