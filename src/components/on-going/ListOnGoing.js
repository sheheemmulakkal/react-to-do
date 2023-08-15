import "./ListOnGoing.css";
import { format } from 'date-fns'

const ListOnGoing = ({ item, dropTask, completeTask }) => {

    const handleDrop = (itemId) => {
        dropTask(itemId, 'dropped')
    }
    const handleComplete = (itemId) => {
        completeTask(itemId, 'completed')
    }
    const date = format(item.date, "dd MMM yyyy");
    const time = format(item.date, "HH:mm:ss");
  return (
    <div className="row list list-on-going rounded-2 mt-1">
      <div className="col-2 my-0 py-0">
        <i class="fa-solid fa-check done-icon"
            onClick={() => handleComplete(item.id)}
        ></i>
      </div>
      <div className="col-8 my-0 py-0 ">
        <div className="text-container">
          <p>{item.content}</p>
        </div>
      </div>
      <div className="col-2 my-0 py-0">
        <i class="fa-solid fa-trash-can delete-icon"
            onClick={() => handleDrop(item.id)}
        ></i>
      </div>
      <div className="col-12 my-0 py-0 d-flex justify-content-between">
        <span className="time">{ date }</span>
        <span className="time">{ time }</span>
      </div>
    </div>
  );
};

export default ListOnGoing;
