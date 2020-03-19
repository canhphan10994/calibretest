import React, { useState, createContext } from "react";

export const BillingContext = createContext();

export const BillProvider = props => {
  const [bill, setBill] = useState({
    productList: [],
    title: "",
    firstName: "",
    lastName: "",
    country: "VN",
    address1: "",
    address2: "",
    city: "",
    county: "",
    zip: "",
    telephone: "",
    mobile: "",
    shippingAddress: "false",
    subTotal: 0,
    totals: 0,
    shippingFee: 0
  });

  return (
    <BillingContext.Provider value={[bill, setBill]}>
      {props.children}
    </BillingContext.Provider>
  );
};
