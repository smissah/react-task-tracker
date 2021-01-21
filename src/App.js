import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Tidy Up",
      day: "Fed 5th at 5:40",
      reminder: true,
    },
    {
      id: 2,
      text: "Fishing",
      day: "Feb 7th 4:00",
      reminder: true,
    },
    {
      id: 3,
      text: "Tidy Up",
      day: "Feb 7th 4:00",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
