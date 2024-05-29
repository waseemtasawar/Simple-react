import React from "react";

const TabButten = ({ children }) => {
  function HandleClick() {
    console.log("Hello World");
  }
  return (
    <li>
      <button onClick={HandleClick}>{children}</button>
    </li>
  );
};

export default TabButten;
