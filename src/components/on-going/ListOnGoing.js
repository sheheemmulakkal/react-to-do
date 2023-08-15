import "./ListOnGoing.css";

const ListOnGoing = () => {
  return (
    <div className="row list list-on-going rounded-2 mt-1">
      <div className="col-2 my-0 py-0">
        <i class="fa-solid fa-check done-icon"></i>
      </div>
      <div className="col-8 my-0 py-0 ">
        <div className="text-container">
          <p>ongoingljkhdsfioghdioghioghioghgodhgoiueiogiogdsrilh</p>
        </div>
      </div>
      <div className="col-2 my-0 py-0">
        <i class="fa-solid fa-trash-can delete-icon"></i>
      </div>
      <div className="col-12 my-0 py-0">
        <span className="time">28-2-2522</span>
      </div>
    </div>
  );
};

export default ListOnGoing;
