import React, { useState, createContext, useContext } from "react";
import { BagStoreContext } from "./BagStore";

export const ButtonContext = createContext();

export const ButtonProvider = props => {
  const [styleButton, setStyleButton] = useState({
    img: "./img/Bag AA.png",
    disableEvent: {}
  });

  return (
    <ButtonContext.Provider value={[styleButton, setStyleButton]}>
      {props.children}
    </ButtonContext.Provider>
  );
};
