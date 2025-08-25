import skeleton from "../assets/skeleton.jpeg";

const GameCardSkeleton = () => {
  return (
    <div className="card card-fixed" aria-hidden="true">
      <img src={skeleton} className="card-img-top bg-grey" />

      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-8"></span>
        </h5>

        <div className="d-flex justify-content-between card-text placeholder-glow">
          <span className="placeholder col-4"></span>
          <span className="placeholder col-2"></span>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
