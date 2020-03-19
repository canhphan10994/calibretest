import React, { useState, createContext } from "react";

export const BagStoreContext = createContext();

export const BagProvider = props => {
  const [productsList, setProductsList] = useState([]);

  return (
    <BagStoreContext.Provider value={[productsList, setProductsList]}>
      {props.children}
    </BagStoreContext.Provider>
  );
};
