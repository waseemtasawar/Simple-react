import React from "react";
import "./TabButten.css";
const Tab = ({ children, buttons }) => {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
};

export default Tab;
