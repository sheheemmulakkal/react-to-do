import "./ListOnGoing.css";

const ListOnGoing = () => {
  return (
    <div className="row list list-on-going rounded-2 mt-1">
      <div className="col-2">
        <i class="fa-solid fa-check done-icon"></i>
      </div>
      <div className="col-8">
        <p>ongoing</p>
      </div>
      <div className="col-2">
        <i class="fa-solid fa-trash-can delete-icon"></i>
      </div>
    </div>
  );
};

export default ListOnGoing;
