// import React from "react"; //not needed anymore - only for Class based components beayse it uses React.Component

import Button from "./Button";

const Header = ({ handleShowForm, trueOrFalse }) => (
  <header className="header">
    <h1>Task Tracker</h1>
    <Button
      color="#58D68D"
      text={trueOrFalse == true ? "-" : "+"}
      handleShowForm={handleShowForm}
    />
  </header>
);

export default Header;
