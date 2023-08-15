const AddTask = () => {
  return (
    <div className="row col-12 d-flex justify-content-center">
      <div className="d-flex justify-content-center add-task rounded-2 col-12 col-sm-6 p-0">
        <div className="left">
          <textarea
            name="task"
            id="task"
            cols="30"
            rows="1"
            placeholder="Plan Something..."
            className="rounded-2"
          />
        </div>
        <div className="right-erase">
          <button className=" btn btn-outline-* text-white px-0">
            <i class="fa-solid fa-delete-left erase-icon px-0"></i>
          </button>
        </div>
        <div className="right-add px-0">
          <button className="add-button btn btn-outline-* text-white px-0">
            <i class="fa-solid fa-plus add-icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
