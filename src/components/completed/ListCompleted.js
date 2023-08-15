import "./ListCompleted.css";

const ListCompleted = () => {
  return (
    <div className="row list list-completed rounded-2 mt-1">
      <div className="col-10">
        <p>content</p>
      </div>
      <div className="col-2">
        <i class="fa-solid fa-trash-can delete-icon"></i>
      </div>
    </div>
  );
};

export default ListCompleted;
