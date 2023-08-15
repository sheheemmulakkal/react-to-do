import "./ListCompleted.css";
import { format } from 'date-fns';

const ListCompleted = ({ item, deleteTask }) => {

    const delteHandler = ( itemId ) => {
        deleteTask( itemId )
    }

    const date = format(item.date, "dd MMM yyyy");
    const time = format(item.date, "HH:mm:ss");

  return (
    <div className="row list list-completed rounded-2 mt-1">
      <div className="col-10 my-0 py-0">
        <div className="text-container">
          <p>{ item.content }</p>
        </div>
      </div>
      <div className="col-2 my-0 py-0">
        <i class="fa-solid fa-trash-can delete-icon"
            onClick={() => delteHandler( item.id )}
        ></i>
      </div>
      <div className="col-12 my-0 py-0 d-flex justify-content-between">
        <span className="time">{ date }</span>
        <span className="time">{ time }</span>
      </div>
    </div>
  );
};

export default ListCompleted;
