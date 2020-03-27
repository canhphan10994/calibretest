import React, { useState, createContext } from "react";

export const ButtonContext = createContext();

export const ButtonProvider = props => {
  const [styleButton, setStyleButton] = useState({
    img: "./img/bagicon.svg",
    disableEvent: {}
  });

  return (
    <ButtonContext.Provider value={[styleButton, setStyleButton]}>
      {props.children}
    </ButtonContext.Provider>
  );
};
