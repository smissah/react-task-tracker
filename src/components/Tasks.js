import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleDeleteTask, handleReminder }) => {
  return (
    <div>
      <p>Double-click a task to add reminder!</p> <hr />
      {tasks.map(({ id, text, reminder, day }) => (
        <Task
          key={id}
          taskId={id}
          text={text}
          reminder={reminder}
          day={day}
          handleDeleteTask={handleDeleteTask}
          handleReminder={handleReminder}
        />
      ))}
    </div>
  );
};

export default Tasks;
