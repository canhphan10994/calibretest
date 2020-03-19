import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BillingContext } from "./BillingData";
import { BagStoreContext } from "./BagStore";

export const TrackLine = props => {
  const [bill, setBill] = useContext(BillingContext);

  return (
    <div className="track__line">
      <ul>
        <li>sign in</li>
        <li>shipping</li>
        <li>billing</li>
        <li>confirmation</li>
      </ul>
    </div>
  );
};

export const Button = props => {
  const [bill, setBill] = useContext(BillingContext);
  const [productsList] = useContext(BagStoreContext);

  const updateBill = () => {
    if (productsList.length > 0) {
      let sTotal = productsList
        .map(product => product.uPrice)
        .reduce((total, curr) => total + curr);

      let sTax = productsList
        .map(product => product.tax)
        .reduce((total, curr) => total + curr);

      let sDuties = productsList
        .map(product => product.duties)
        .reduce((total, curr) => total + curr);
      let sTotals = sTotal + sTax + sDuties;
      setBill({
        ...bill,
        productList: productsList,
        subTotal: sTotal,
        totals: sTotals
      });
    }
  };

  return (
    <div className="button">
      <img src="./img/gavel_24px_outlined.svg" alt="wallet" />
      <Link to={props.rUrl} onClick={updateBill}>
        buy now
      </Link>
    </div>
  );
};

export default TrackLine;
