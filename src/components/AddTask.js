import React from "react";
import { useState } from "react";

const AddTask = ({ handleShowForm, handleAddTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    if (!text) {
      alert("Please enter a text");
      return;
    }
    if (!date || date < today) {
      alert("Hmm, that date doesn't look right");
      return;
    }

    handleAddTask({ text, date, time, reminder });

    setText("");
    setDate("");
    setTime("");
    setReminder(false);
  };

  return (
    <form action="#" className="add-form" onSubmit={handleOnSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          placeholder="Add a task here!"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="date-and-time">Date & Time</label>
        <input
          type="date"
          placeholder="When is it due?"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <input
          type="time"
          placeholder="When is it due?"
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="Set-reminder">Reminder</label>
        <input
          type="checkbox"
          onChange={
            (e) => setReminder(e.currentTarget.checked) //returns true or false if checked
          }
        />
      </div>
      <input
        type="submit"
        value="Save Task"
        className="btn"
        style={{
          width: "55% ",
          marginLeft: "2rem",
        }}
        // onSubmit={handleAddTask}
      />
      <input
        type="button"
        value="Cancel"
        className="btn"
        style={{
          background: "#ED8175",
          width: "35% ",
          //   transform: "translateX(50%)",
        }}
        onClick={handleShowForm}
      />
    </form>
  );
};

export default AddTask;