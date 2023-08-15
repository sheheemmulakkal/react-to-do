import ListDropped from "./ListDropped";
import "./Dropped.css";
const Dropped = () => {
  return (
    <div className="col-12 col-sm-4 p-1">
      <div className="dropped rounded-2">
        <div className="head d-flex justify-content-center">
          <h3>Dropped</h3>
        </div>
        <div className="">
          <ListDropped />
        </div>
      </div>
    </div>
  );
};

export default Dropped;
