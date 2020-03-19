import React, { useState, createContext, useContext } from "react";

export const AccountContext = createContext();

export const AccountProvider = props => {
  const [account, setAccount] = useState({
    id: "admin",
    password: "admin",
    isLogged: false
  });

  return (
    <AccountContext.Provider value={[account, setAccount]}>
      {props.children}
    </AccountContext.Provider>
  );
};
