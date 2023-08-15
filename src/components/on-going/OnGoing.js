import ListOnGoing from "./ListOnGoing";
import "./OnGoing.css";
const OnGoing = () => {
  return (
    <div className=" col-12 col-sm-4 p-1">
      <div className="on-going rounded-2">
        <div className="head d-flex justify-content-center">
          <h3>On going</h3>
        </div>
        <div>
          <ListOnGoing />
          <ListOnGoing />
          <ListOnGoing />
          <ListOnGoing />
          <ListOnGoing />
        </div>
      </div>
    </div>
  );
};

export default OnGoing;
