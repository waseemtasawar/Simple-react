import React from "react";
import "./TabButten.css";
const Tab = ({ children, buttons, ButtonsConatainer = "menu" }) => {
  //   const ButtonsConatainer = buttonsContainer;
  return (
    <>
      <ButtonsConatainer>{buttons}</ButtonsConatainer>
      {children}
    </>
  );
};

export default Tab;
