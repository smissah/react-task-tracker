import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({
  text,
  reminder,
  day,
  taskId,
  handleDeleteTask,
  handleReminder,
}) => {
  return (
    <div>
      <div
        className={` task ${reminder && "reminder"} `}
        onDoubleClick={() => {
          handleReminder(taskId);
          //flip the bool and then change the class with a turnary
        }}
      >
        <h3>
          {text}
          <FaTimes
            style={{ color: "#EC7063", cursor: "pointer" }}
            onClick={() => {
              handleDeleteTask(taskId);
            }}
          />
        </h3>
        <p>{day}</p>
      </div>
    </div>
  );
};

export default Task;
