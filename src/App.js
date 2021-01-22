import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Hooray from "./components/Hooray";
import { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [addTaskForm, setAddTaskForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      // console.log(tasksFromServer);
      setTasks(tasksFromServer);
      // console.log(tasks);
      // return;
    };
    getTasks();
    //? eslint-disable-next-line react-hooks/exhaustive-deps - this handles my error for putting the fetch outside of the useEffect
  }, []);

  //!fetchTasks
  //put fetch out because i might want to use it else where
  const fetchTasks = async () => {
    const url = "http://localhost:5000/tasks";
    //fetch returns a promise so await it
    const reponse = await fetch(url);
    const data = await reponse.json();
    console.log("data from j.son", data);
    return data;
  };

  //!removeTask
  const handleDeleteTask = async (taskId) => {
    //no need for variable as no data to be returned
    await fetch(`http://localhost:5000/tasks/${taskId}`, {
      method: "DELETE",
    });
    //delete request
    console.log(`Removing task ${taskId}`);
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

  const handleAddTask = async (task) => {
    const response = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    setTasks([...tasks, data]);

    // no need for this as server/dbase makes id
    //   const id = Math.floor(Math.random() * 100) + 1;
    //   const newTask = { id, ...task };
    //   setTasks([...tasks, newTask]);
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

      {tasks.length !== 0 || addTaskForm !== false ? (
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
