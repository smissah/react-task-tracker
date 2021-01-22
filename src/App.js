import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Hooray from "./components/Hooray";
import { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [addTaskForm, setAddTaskForm] = useState(true);

  const url = "http://localhost:5000/tasks";
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };
    fetchTasks();
  }, []);

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
      {tasks.length <= 0 && addTaskForm ? (
        <Tasks
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleReminder={handleReminder}
        />
      ) : (
        <Hooray />
      )}
    </div>
  );
};

export default App;
