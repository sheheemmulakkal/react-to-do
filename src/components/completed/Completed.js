import "./Completed.css";
import ListCompleted from "./ListCompleted";
const Completed = () => {
  return (
    <div className="col-12 col-sm-4 p-1">
      <div className="completed rounded-2">
        <div className="head d-flex justify-content-center">
          <h3>Completed</h3>
        </div>
        <div>
          <ListCompleted />
          <ListCompleted />
        </div>
      </div>
    </div>
  );
};

export default Completed;
