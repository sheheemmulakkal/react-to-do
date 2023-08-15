import AddTask from "./components/AddTask";
import Navbar from "./components/navbar/Navbar";
import Dropped from "./components/dropped/Dropped";
import OnGoing from "./components/on-going/OnGoing";
import Completed from "./components/completed/Completed";

import "./App.css";
function App() {
  return (
    <div className="row app-js">
      <Navbar />
      <AddTask />
      <Completed />
      <OnGoing />
      <Dropped />
    </div>
  );
}

export default App;
