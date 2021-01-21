import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Tidy Up",
      day: "Fed 5th at 5:40",
      reminder: false,
    },
    {
      id: 2,
      text: "Fishing",
      day: "Feb 7th 4:00",
      reminder: true,
    },
    {
      id: 3,
      text: "Walk Teddy",
      day: "Feb 7th 6:00",
      reminder: false,
    },
  ]);
  const [addTaskForm, setAddTaskForm] = useState(true);

  //!removeTask
  const handleDeleteTask = (taskId) => {
    console.log(`Removing task ${taskId}`);
    // console.log(prevState);
    setTasks(
      tasks.filter((task) => {
        return task.id !== taskId;
      })
    );
  };

  //!handleReminder

  const handleReminder = (taskId) => {
    console.log(`Reminder: ${taskId}`);
    setTasks(
      tasks.map(
        (task) =>
          task.id === taskId ? { ...task, reminder: !task.reminder } : task
        //break down the task object but change the reminder - OTHERWISE JUST RETURN THE OBJECT OR IT'LL BREAK
      )
    );
  };

  //!Show form
  const handleShowForm = () => {
    // console.log(addTaskForm);
    setAddTaskForm(!addTaskForm);
    console.log(addTaskForm);
    return addTaskForm;
  };

  //!add new task

  const handleAddTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    setAddTaskForm(false);
  };

  return (
    <div className="container">
      <Header handleShowForm={handleShowForm} trueOrFalse={addTaskForm} />
      {addTaskForm && (
        <AddTask
          handleAddTask={handleAddTask}
          handleShowForm={handleShowForm}
        />
      )}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleReminder={handleReminder}
        />
      ) : (
        <h3 className="completed">Hooray, all tasks completed!</h3>
      )}
    </div>
  );
}

export default App;
