import ListOnGoing from "./ListOnGoing";
import "./OnGoing.css";
const OnGoing = ( props ) => {

  const onGoingItems = props.toDoList.filter( (item) => (
    item.status == 'onGoing'
  ))
  return (
    <div className=" col-12 col-sm-4 p-1">
      <div className="on-going rounded-2">
        <div className="head d-flex justify-content-center">
          <h3>On going</h3>
        </div>
        <div>
          { onGoingItems.map((items) => (
            <ListOnGoing 
              item = { items }
              key={items.id}
              dropTask={props.dropTask}
              completeTask={props.completeTask} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnGoing;
