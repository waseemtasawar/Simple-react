import React from "react";

const TabButten = ({ children, onSelect }) => {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButten;
