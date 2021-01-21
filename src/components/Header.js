// import React from "react"; //not needed anymore - only for Class based components beayse it uses React.Component

import Button from "./Button";

const addTask = () => {
  console.log("addTask");
};
const Header = () => (
  <header className="header">
    <h1>Task Tracker</h1>
    <Button color="#58D68D" text="+" btnFunc={addTask} />
  </header>
);

export default Header;
