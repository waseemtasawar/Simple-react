import React from "react";

const TabButten = ({ children, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButten;
