import "./ListDropped.css";
import { format, parseISO } from 'date-fns';

const ListDropped = ({ item, restoreTask, deleteTask }) => {

    const date = format(parseISO(item.date), "dd MMM yyyy");
    const time = format(parseISO(item.date), "HH:mm:ss");
    const deleteHandler = ( itemId ) => {
        deleteTask ( itemId )
    }
    const restoreHandler = ( itemId ) => {
        restoreTask(itemId, 'onGoing')
    }

  return (
    <div className="row list list-dropped rounded-2 mt-1">
      <div className="col-2 my-0 py-0">
        <i class="fa-solid fa-arrow-rotate-left restore-icon"
            onClick={ () => restoreHandler(item.id)}
        ></i>
      </div>
      <div className="col-8 my-0 py-0">
        <div className="text-container">
          <p>{ item.content }</p>
        </div>
      </div>
      <div className="col-2 my-0 py-0">
        <i class="fa-solid fa-trash-can delete-icon"
            onClick={ () => deleteHandler( item.id )}
        ></i>
      </div>
      <div className="col-12 my-0 py-0 d-flex justify-content-between">
        <span className="time">{ date }</span>
        <span className="time">{ time }</span>
      </div>
    </div>
  );
};

export default ListDropped;
