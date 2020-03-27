import React, { useState, createContext } from "react";

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
